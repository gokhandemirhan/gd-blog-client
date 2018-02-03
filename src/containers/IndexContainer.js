import React, { Component } from "react";
import Posts from "../components/Posts";
import PostsAPI from "../api/api";

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    PostsAPI.getAllPosts().then(json => {
      if (json) {
        const posts = json.posts;
        this.setState({ posts });
      }
    });
  }

  handleDelete(postId) {
    const r = window.confirm("Sure ?");
    if (r && postId) {
      PostsAPI.deletePost(postId).then(json => {
        if (json) {
          this.setState({
            posts: this.state.posts.filter(el => el._id !== postId)
          });
        }
      });
    }
  }
  render() {
    return (
      <div>
        {/*TODO:Can add header here*/}
        <div>
          <Posts posts={this.state.posts} handleDelete={this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default IndexPage;
