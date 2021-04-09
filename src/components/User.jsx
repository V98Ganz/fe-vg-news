import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

class User extends Component {
  state = {
    user: {},
    isLoading: true,
    err: null,
  };

  getUser = () => {
    const { userName } = this.props;
    api
      .fetchUser(userName)
      .then((user) => {
        this.setState({ user, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err, isLoading: false });
      });
  };

  componentDidMount() {
    this.getUser();
  }

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
      <main className="user-page-grid">
        <div className="user-page-info">
          <img
            className="user-page-img"
            src={this.state.user.avatar_url}
            alt={`${this.state.user.username} avatar`}
          />
          <h2>{this.state.user.name}</h2>
          <p>User Name: {this.state.user.username}</p>
        </div>

        <div className="user-page-comments">
          <h3>Your Comments</h3>
        </div>

        <div className="user-page-articles">
          <h3>Your Articles</h3>
        </div>
      </main>
    );
  }
}

export default User;
