import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import ArticleCard from "./ArticleCard";

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
          const {
            title,
            comment_count,
            author,
            created_at,
            topic,
            votes,
            article_id,
          } = article;
          return (
            <div className="article-card" key={title}>
              <Link
                to={`/articles/${article_id}`}
                style={{ textDecoration: "none" }}
              >
                <ArticleCard
                  title={title}
                  author={author}
                  comment_count={comment_count}
                  created_at={created_at}
                  topic={topic}
                  votes={votes}
                />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Articles;
