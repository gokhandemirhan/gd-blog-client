import React from 'react';
import { withRouter } from 'react-router-dom'


const NewPost = (props) => (
    <form onSubmit={props.handleSubmit}>
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
                <input className="input" type="text" placeholder="Post title" name="title" value={props.newPost.title} onChange={props.handleChange} />
            </div>
        </div>

        <div class="field">
            <label class="label">Message</label>
            <div class="control">
                <textarea class="textarea" rows="10" placeholder="Post content" name="content" value={props.newPost.content} onChange={props.handleChange}></textarea>
            </div>
        </div>

        <input className="button is-success is-pulled-right" type="submit" value="Submit" />
    </form>
);

export default withRouter(NewPost);
