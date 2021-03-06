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
    err: null,
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
    this.getArticles();
  }

  articleSorter = (event) => {
    const name = event.target.name;
    if (name !== this.state.sort_by) {
      this.setState({ isLoading: true })
      api
        .fetchArticles({ name })
        .then((articles) => {
          this.setState({ articles, isLoading: false });
        })
        .catch((err) => {
          this.setState({ err, isLoading: false });
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
      return <ErrorPage status={response.status} msg={response.data.msg} />;
    }
    return (
      <main className="articles-grid">
        <ArticlesSorter articleSorter={this.articleSorter} />
        {this.state.articles.map((article) => {
          const { title, votes, article_id } = article;
          return (
            <div className="article-card" key={title}>
              <Votes id={article_id} paraPoint={"articles"} votes={votes} />
              <Link
                to={`/articles/${article_id}`}
                style={{ textDecoration: "none" }}
              >
                <ArticleCard article={article} />
              </Link>
            </div>
          );
        })}
      </main>
    );
  }
}

export default Articles;
