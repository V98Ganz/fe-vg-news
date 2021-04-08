import React, { Component } from "react";
import * as api from "../utils/api";

class NewComment extends Component {
  state = {
    username: "",
    body: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, username: this.props.username });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, body } = this.state;
    api
      .postComment(this.props.article_id, username, body)
      .then((newComment) => {
        this.setState({ body: "" });
        this.props.addNewComment(newComment);
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  };

  render() {
    return (
      <div className="new-comment-form">
        <form onSubmit={this.handleSubmit}>
          <h4>Comments</h4>
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
