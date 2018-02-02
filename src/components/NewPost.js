import React from 'react';
import { withRouter } from 'react-router-dom'


const NewPost = (props) => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <label>
                Title:
                <input type="text" name="title" value={props.newPost.title} onChange={props.handleChange} />
            </label>
        </div>
        <div>
            <label>
                Content:
                <textarea name="content" value={props.newPost.content} onChange={props.handleChange}></textarea>
            </label>
        </div>
        <input type="submit" value="Submit" />
    </form>
);

export default withRouter(NewPost);
