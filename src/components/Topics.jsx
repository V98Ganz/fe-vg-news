import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import ArticleCard from "./ArticleCard";
import Votes from "./Votes";
import ArticlesSorter from "./ArticlesSorter";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

class Topics extends Component {
  state = {
    topics: [],
    articles: [],
    topic: "",
    sort_by: "",
    isLoading: true,
    err: null,
  };

  getTopics = () => {
    api.fetchTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    })
    .catch((err) => {
      this.setState({ err, isLoading: false });
    });
  };

  handleClick = (event) => {
    const filteredVariable = event.target.id;
    this.setState((currState) => {
      if (filteredVariable !== currState.topic) {
        return {
          topic: filteredVariable,
        };
      }
    });
    if (filteredVariable !== this.state.topic) {
      api.fetchArticles({ topic: filteredVariable }).then((articles) => {
        this.setState({ articles });
      })
      .catch((err) => {
        this.setState({ err, isLoading: false });
      });
    }
  };

  componentDidMount() {
    this.getTopics();
  }

  articleSorter = (event) => {
    const name = event.target.name;
    if (name !== this.state.sort_by) {
      const { topic } = this.state;
      this.setState({ sort_by: name });
      api.fetchArticles({ topic, name }).then((articles) => {
        this.setState({ articles });

        if (global.globalId) {
          const atThisId = this.state.articles.findIndex((article) => {
            return article.article_id === global.globalId;
          });
          this.setState((currState) => {
            const strawState = this.state
              strawState.articles[atThisId].votes =
              currState.articles[atThisId].votes - global.globalVotes;
            return {
              articles: currState.articles,
            };
          });
        }
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
          <ArticlesSorter articleSorter={this.articleSorter} />
          {this.state.articles.map((article) => {
            const {
              votes,
              article_id,
            } = article;
            return (
              <li key={article_id} className="article-card-topic-page">
                <Link
                  to={`/articles/${article_id}`}
                  style={{ textDecoration: "none" }}
                >
                  <ArticleCard
                    article={article}
                  />
                </Link>
                <Votes id={article_id} paraPoint={"articles"} votes={votes} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Topics;
