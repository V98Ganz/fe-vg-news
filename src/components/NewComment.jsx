import React, { Component } from "react";
import * as api from "../utils/api";
import ErrorPage from "./ErrorPage";

class NewComment extends Component {
  state = {
    username: "",
    body: "",
    err: null,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, username: this.props.username });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, body } = this.state;
    if (body) {
      api
        .postComment(this.props.article_id, username, body)
        .then((newComment) => {
          this.setState({ body: "" });
          this.props.addNewComment(newComment);
        })
        .catch((err) => {
          this.setState({ err });
        });
    }
  };

  render() {
    const { err } = this.state;
    if (err) {
      const { response } = err;
      return <ErrorPage status={response.status} msg={response.data.msg} />;
    }
    return (
      <div className="new-comment-form">
        <form onSubmit={this.handleSubmit}>
          <h3>Join the conversation</h3>
          <label htmlFor="body">
            Comment as <em>{this.props.username}</em>
          </label>
          <textarea
            // placeholder="What are your thoughts?"
            className="comment"
            onChange={this.handleChange}
            name="body"
            value={this.state.body}
            type="text"
          ></textarea>
          <input
            htmlFor="submit"
            className="submit-button"
            value="Comment"
            type="submit"
          ></input>
        </form>
      </div>
    );
  }
}

export default NewComment;
