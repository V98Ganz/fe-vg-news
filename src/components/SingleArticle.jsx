import React, { Component } from "react";
import * as api from "../utils/api";
import Comments from "./Comments";
import NewComment from "./NewComment";
import Votes from "./Votes";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  getArticle = () => {
    api.fetchArticle(this.props.article_id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  };

  componentDidMount() {
    const { article } = this.props;
    this.getArticle(article);
  }

  render() {
    const {
      author,
      body,
      created_at,
      title,
      comment_count,
      topic,
    } = this.state.article;
    return (
      <section className="single-article-page-grid">
        <div className="single-article-page-article">
          <div>
            <h2>{title}</h2>
            <p>{topic}</p>
          </div>
          <p>{body}</p>

          <div className="single-article-stats">
            <p className="article-stats-grid-item">Posted by {author}</p>
            <p className="article-stats-grid-item">at {created_at}</p>
            <p className="article-stats-grid-item">{comment_count} Comments</p>
            <Votes />
          </div>
        </div>
        <Comments article_id={this.props.article_id} />
        <NewComment />
      </section>
    );
  }
}

export default SingleArticle;
