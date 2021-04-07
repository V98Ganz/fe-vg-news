import React, { Component } from "react";
import * as api from "../utils/api";

class Comments extends Component {
  state = {
    comments: [],
  };

  getComments = () => {
    if (this.props.article_id) {
      api.fetchComments(this.props.article_id).then((comments) => {
        this.setState({ comments });
      });
    }
  };

  componentDidMount() {
      const { comments } = this.props;
      this.getComments(comments);
  }

  render() {
    return (
      <div className="comment-article-container" >
          <h3>Comments</h3>
          <ul className="comment-article-list" >
        {this.state.comments.map((comment) => {
            return (
                <li
                className="comment-article-list-item"
                key={comment.comment_id} >
                    <p>{comment.author}</p>
                    <p>{comment.body}</p>
                    <p>{comment.created_at}</p>
                    <p>{comment.votes}</p>  
                </li>
            )
        })}   
          </ul>
      </div>
    );
  }
}

export default Comments;
