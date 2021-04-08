import React, { Component } from "react";
import * as api from "../utils/api";
import Comments from "./Comments";
import NewComment from "./NewComment";
import Votes from "./Votes";

class SingleArticle extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true,
  };

  componentDidMount() {
    Promise.all([
      api.fetchArticle(this.props.article_id),
      api.fetchComments(this.props.article_id),
    ]).then(([article, comments]) => {
      this.setState({ article, comments, isLoading: false });
    });
  }

  addNewComment = (newComment) => {
    this.setState((currState) => {
      return {
        comments: [newComment, ...currState.comments],
      };
    });
  };

  deleteComment = (id) => {
    api.deleteComment(id)
    const item = this.state.comments.findIndex((comment) => {
     return comment.comment_id === id
    })
    this.setState((currState) => {
      return {
        comments: [currState.comments.splice(item, 1), ...currState.comments]
      }
    })
  };

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
        <NewComment
          username={this.props.userName}
          article_id={this.props.article_id}
          addNewComment={this.addNewComment}
        />
        <Comments
          deleteComment={this.deleteComment}
          username={this.props.userName}
          comments={this.state.comments}
        />
      </section>
    );
  }
}

export default SingleArticle;
