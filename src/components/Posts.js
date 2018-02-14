import React from "react";
import { Link } from "react-router-dom";
import Post from "./PostTile";

const AllPosts = (props) => (
  <div>
      <h1 className="title">All posts</h1>
      <h2 className="subtitle">
          Here are all the <strong>posts</strong> that I wrote so far
      </h2>

    <div className="">
      {props.posts.map(post => (
        <div key={post._id} className="box">
          <Post post={post} handleDelete={props.handleDelete}/>
        </div>
      ))}
    </div>
  </div>
);

export default AllPosts;
