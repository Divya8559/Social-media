import React, { Component } from "react";
import PropTypes from "prop-types";

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      post && (
        <div style={styles.postContainer}>
          <h1 style={styles.postTitle}>{post.postTitle}</h1>
          <img
            style={styles.postImage}
            src={post.postUrl}
            alt={post.postTitle}
          />
        </div>
      )
    );
  }
}

Post.protTypes = {
  post: PropTypes.object.isRequired
};

const styles = {
  postContainer: {
    padding: "16px",
    backgroundColor: "#fff",
    marginBottom: "16px",
    boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2)"
  },
  postTitle: {
    textAlign: "center",
    fontSize: "20px",
    margin: "4px 0 16px"
  },
  postImage: {
    width: "100%"
  }
};

export default Post;
