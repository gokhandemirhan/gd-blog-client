import React from 'react'
import {Link} from 'react-router-dom';


const Post = (props) => (
    <Link to={`/posts/${props.post._id}`}>I am a post</Link>
);


export default Post;
