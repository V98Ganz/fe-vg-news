import React, { Component } from "react";
import * as api from "../utils/api";
import ErrorPage from "./ErrorPage";

class Votes extends Component {
  state = {
    voteChange: 0,
    err: null,
  };

  updateVotes = (event) => {
    const { id } = this.props;
    global.globalId = id;
      api.patchVotes(event.target.id, id, event.target.name*1).then(() => {
        this.setState((currState) => {
          return {
            voteChange: currState.voteChange + event.target.name*1
          }
        })
        global.globalVotes = this.state.voteChange;
      })
      .catch((err) => {
        this.setState({ err, isLoading: false });
      });
  };

  render() {
    const { err } = this.state;
    if (err) {
      const { response } = err;
      return <ErrorPage status={response.status} msg={response.data.msg} />;
    }
    return (
      <section className="articles-voter" >
        <button
        className="article-voter-button"
          id={this.props.paraPoint}
          name={'1'}
          onClick={this.updateVotes}
        >
          Up
        </button>
        <p >{this.props.votes + this.state.voteChange}</p>
        <button
        className="article-voter-button"
          id={this.props.paraPoint}
          name={"-1"}
          onClick={this.updateVotes}
        >
          Down
        </button>
      </section>
    );
  }
}

export default Votes;
