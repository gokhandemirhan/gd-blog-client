import React from "react";
import { Link } from "react-router-dom";
import Post from "../components/Post";

const AllPosts = (props) => (
  <div>
    <h2>All posts</h2>
    <Link to={`/createpost`}>Create new post</Link>
    <ul>
      {props.posts.map(post => (
        <li key={post._id}>
          <Post post={post} handleDelete={props.handleDelete}/>
        </li>
      ))}
    </ul>
  </div>
);

export default AllPosts;
