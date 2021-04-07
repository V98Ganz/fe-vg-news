import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  getArticles = () => {
    api.fetchArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  componentDidMount() {
    const { articles } = this.props;
    this.getArticles(articles);
  }

  render() {
    return (
      <div className="articles-grid">
        {this.state.articles.map((article) => {
          return (
            <div className="article-card" key={article.title}>
              <Link
                to={`/articles/${article.article_id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="article-card-inner">
                  <h3 className="card-text">{article.title}</h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Articles;
