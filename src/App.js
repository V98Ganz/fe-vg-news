import { Router } from "@reach/router";
import React from "react";
import './App.css';
import Articles from "./components/Articles";
import Nav from './components/Nav';
import Topics from "./components/Topics";
import User from "./components/User";

class App extends React.Component {
  state = {
    user: {
      username: "jessjelly",
      avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
      name:	"Jess Jelly"
    }
  }
  render() {
    const user = this.state.user.username
    return (
      <div className="App">
        <Nav name={user} />
        <Router>
        <Articles path="/" />
        <Topics path="/topics" />
        <User path={`/user/${user}`} /> 
        </Router>
      </div>
    );
  }
}

export default App;
