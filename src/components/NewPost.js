import React, { Component } from "react";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        imageUrl: "",
        imageTitle: ""
      }
    };
  }

  handleChange = event => {
    const e = { ...event };
    this.setState(prevState => ({
      post: {
        ...prevState.post,
        [e.target.name]: e.target.value
      }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.post.imageUrl === "") {
      alert("Please enter Image URL");
    } else if (this.state.post.imageTitle === "") {
      alert("Please enter Image Title");
    } else {
      this.props.onSubmit(this.state.post);
    }
  };

  render() {
    return (
      <form style={styles.postForm}>
        <div style={styles.inputDiv}>
          <label style={styles.inputLabel}>Image URL</label>
          <input
            type="text"
            name="Image URL"
            placeholder="Enter URL"
            style={styles.inputField}
            value={this.state.imageUrl}
            onChange={this.handleChange}
          />
        </div>
        <div style={styles.inputDiv}>
          <label style={styles.inputLabel}>Image Title</label>
          <div style={styles.flexRow}>
            <input
              type="text"
              name="Image Title"
              placeholder="Enter Title"
              style={styles.inputField}
              value={this.state.imageTitle}
              onChange={this.handleChange}
            />
            <button style={styles.submitButton} onClick={this.handleSubmit}>
              New Post
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const styles = {
  postForm: {
    padding: "16px",
    backgroundColor: "#fff",
    marginBottom: "24px",
    boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2)"
  },
  inputDiv: {
    display: "flex",
    flexDirection: "column",
    margin: "8px 0"
  },
  inputLabel: {
    fontSize: "12px"
  },
  inputField: {
    margin: "4px 0",
    width: "100%",
    padding: "8px",
    boxSizing: "border-box"
  },
  flexRow: {
    display: "flex"
  },
  submitButton: {
    cursor: "pointer",
    padding: "6px",
    border: "1px solid #E91E63",
    backgroundColor: "#E91E63",
    color: "#fff",
    height: "34px",
    marginTop: "4px",
    width: "35%"
  }
};

export default NewPost;
