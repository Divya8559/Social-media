import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewPost from "./components/NewPost";
import PostList from "./components/PostsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsList: []
    };
  }

  handleSubmit = postObj => {
    let list = [...this.state.postsList];
    list.unshift(postObj);
    this.setState({
      postsList: list
    });
  };

  render() {
    return (
      <div className="social-media-app">
        <header className="app-header">
          <h1>Social Media App</h1>
        </header>
        <div>
          <NewPost onSubmit={this.handleSubmit} />
          <PostList postsList={this.state.postsList} />
        </div>
      </div>
    );
  }
}

export default App;
