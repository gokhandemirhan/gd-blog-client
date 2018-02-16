import React from 'react'
import {Link} from 'react-router-dom';

const PostTile = (props) => (

    <article className="media">
        <figure className="media-left">
            <p className="image is-128x128">
                <img src={props.post.photoUrl} />
            </p>
        </figure>
        <div className="media-content">
            <div className="content">
                <p>
                    <Link className="title" to={`/posts/${props.post._id}`}>{props.post.title}</Link>
                    <br />
                    {props.post.content}
                </p>
            </div>
            <nav className="level is-mobile">
                <div className="level-left">
                    <Link to={`/posts/edit/${props.post._id}`} className="button is-link is-small">
                        Edit Post
                    </Link>

                </div>
            </nav>
        </div>
        <div className="media-right">
            <a onClick={ (e) => {props.handleDelete(props.post._id)} } className="button delete is-danger">
            </a>
        </div>
    </article>
);


export default PostTile;
