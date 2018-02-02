import React from 'react'
import {Link} from 'react-router-dom';


const Post = (props) => (
    <div>
        <Link to={`/posts/${props.post._id}`}>{props.post.title}</Link>
        <button onClick={ (e) => {props.handleDelete(props.post._id)} }>X</button>
    </div>
);


export default Post;
