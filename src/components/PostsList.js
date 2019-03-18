import React, { Component } from "react";
import PropTypes from "prop-types";
import Post from "./Post";

class PostList extends Component {
  render() {
    return (
      <div>
        {this.props.postsList &&
          this.props.postsList.map((post, index) => (
            <Post post={post} key={index} />
          ))}
      </div>
    );
  }
}

PostList.propTypes = {
  postsList: PropTypes.array.isRequired
};

export default PostList;
