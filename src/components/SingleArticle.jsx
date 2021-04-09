import React, { Component } from "react";
import * as api from "../utils/api";
import Comments from "./Comments";
import NewComment from "./NewComment";
import Votes from "./Votes";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

class SingleArticle extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    Promise.all([
      api.fetchArticle(this.props.article_id),
      api.fetchComments(this.props.article_id),
    ]).then(([article, comments]) => {
      this.setState({ article, comments, isLoading: false });
    })
    .catch((err) => {
      this.setState({ err, isLoading: false });
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
      return comment.comment_id === id;
    });
    this.state.comments.splice(item, 1)
    this.setState((currState) => {
      return {
        comments:  currState.comments
      };
    })
    .catch((err) => {
      this.setState({ err, isLoading: false });
    });
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
    const {
      author,
      body,
      created_at,
      title,
      comment_count,
      topic,
      votes,
      article_id,
    } = this.state.article;
    return (
      <main className="single-article-page-grid">
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
            <Votes id={article_id} paraPoint={"articles"} votes={votes} />
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
      </main>
    );
  }
}

export default SingleArticle;
