import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class Topics extends Component {
  state = {
    topics: [],
    articles: [],
    isLoading: true,
  };

  getTopics = () => {
    api.fetchTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const filteredVariable = event.target.id;
    api.fetchArticles({ topic: filteredVariable }).then((articles) => {
      this.setState({ articles });
    });
  }

  componentDidMount() {
    const { topics } = this.props;
    this.getTopics(topics);
  }

  render() {
    return (
      <div className="topic-grid">
        {this.state.topics.map((topic) => {
          return (
            <div
              className="topic-card"
              key={topic.slug}
              id={topic.slug}
              onClick={this.handleClick}
            >
              <h2 id={topic.slug}>{topic.slug}</h2>
            </div>
          );
        })}
        <ul className="article-card-topic-page">
          {this.state.articles.map((article) => {
            return (
              <li key={article.article_id} className="article-card-topic-page">
                <Link
                  to={`/articles/${article.article_id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="article-card-inner">
                    <h3 className="card-text">{article.title}</h3>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Topics;
