import React from 'react'
import {Link} from 'react-router-dom';


const Post = (props) => (
    <Link to={`/posts/${props.post._id}`}>{props.post.title}</Link>
);


export default Post;
