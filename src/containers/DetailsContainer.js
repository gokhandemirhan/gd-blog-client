import React, { Component } from "react";
import PostsAPI from "../api/api";

class DetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {}
    };
  }

  componentDidMount() {
    const postId = this.props.match.params.postId;

    if (postId) {
      PostsAPI.getPostById(postId).then(json => {
        this.setState({ post: json.post });
      });
    }
  }
  render() {
    return (
      <div>
        <div className="image is-2by1">
          <img src={this.state.post.photoUrl} alt=""/>
        </div>
        <h1 className="title is-1">{this.state.post.title}</h1>
          <div className="content">
              {this.state.post.content}
          </div>
      </div>
    );
  }
}

export default DetailsPage;
