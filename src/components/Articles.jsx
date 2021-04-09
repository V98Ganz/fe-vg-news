import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import ArticleCard from "./ArticleCard";
import Votes from "./Votes";
import ArticlesSorter from "./ArticlesSorter";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

class Articles extends Component {
  state = {
    articles: [],
    sort_by: "",
    isLoading: true,
    err: null
  };

  getArticles = () => {
    api
      .fetchArticles()
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err, isLoading: false });
      });
  };

  componentDidMount() {
    const { articles } = this.props;
    this.getArticles(articles);
  }

  articleSorter = (event) => {
    const name = event.target.name;
    if (name !== this.state.sort_by) {
      api.fetchArticles({ name }).then((articles) => {
        this.setState({ articles });
      });
    }
  };

  render() {
    const { isLoading, err } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    if (err) {
      const { response } = err;
      return (
        <ErrorPage status={response.status} msg={response.data.msg} />
      )
    }
    return (
      <div className="articles-grid">
        <ArticlesSorter articleSorter={this.articleSorter} />
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
                  article_id={article_id}
                />
              </Link>
              <Votes id={article_id} paraPoint={"articles"} votes={votes} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Articles;
