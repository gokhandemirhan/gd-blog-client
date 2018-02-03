import React from 'react'
import {Link} from 'react-router-dom';

const PostTile = (props) => (
    <div className="">
        <Link className="title" to={`/posts/${props.post._id}`}>{props.post.title}</Link>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>

        <div className="field is-grouped">
           <p className="control">
                <Link to={`/posts/edit/${props.post._id}`} className="button is-link">
                    Edit Post
                </Link>
            </p>
            <p className="control">
                <a onClick={ (e) => {props.handleDelete(props.post._id)} } className="button is-danger">
                    Delete post
                </a>
            </p>
        </div>

    </div>
);


export default PostTile;