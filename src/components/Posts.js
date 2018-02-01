import React from "react";
import {Link} from 'react-router-dom';
import PostsAPI from "../api/api";

import Post from "../components/Post";

import PropTypes from "prop-types";

class AllPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    PostsAPI.getAllPosts().then(json => {
      if (json) {
        const posts = json.posts;
        this.setState({ posts });
      }
    });
  }

  render() {
    return (
      <div>
        <h2>All posts</h2>
          <Link to={`/createpost`}>Create new post</Link>
        <ul>
          {this.state.posts.map(post => (
            <li key={post._id}>
              <Post post={post} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

AllPosts.propTypes = {};

export default AllPosts;
