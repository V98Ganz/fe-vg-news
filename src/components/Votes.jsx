import React, { Component } from "react";
import * as api from "../utils/api";

class Votes extends Component {
  state = {
    voteChange: 0,
  };

  updateVotes = (event) => {
    const { id } = this.props;
      api.patchVotes(event.target.id, id, event.target.name*1).then(() => {
        this.setState((currState) => {
          return {
            voteChange: currState.voteChange + event.target.name*1
          }
        })
      })
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <button
          id={this.props.paraPoint}
          name={'1'}
          onClick={this.updateVotes}
        >
          Up
        </button>
        <p>{this.props.votes + this.state.voteChange}</p>
        <button
          id={this.props.paraPoint}
          name={"-1"}
          onClick={this.updateVotes}
        >
          Down
        </button>
      </div>
    );
    //   className="article-stats-grid-item"
  }
}

export default Votes;
