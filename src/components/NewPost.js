import React from "react";
import { withRouter } from "react-router-dom";

const NewPost = props => (
  <div className="is-clearfix">
    <form onSubmit={props.handleSubmit} encType="multipart/form-data">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Post title"
            name="title"
            value={props.newPost.title}
            onChange={props.handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea
            className="textarea"
            rows="10"
            placeholder="Post content"
            name="content"
            value={props.newPost.content}
            onChange={props.handleChange}
          />
        </div>
      </div>

      <div className="file">
        <label className="file-label">
          <input className="file-input" type="file" name="photo" />
          <span className="file-cta">
            <span className="file-label">Choose a photo for the post</span>
          </span>
        </label>
      </div>

      <input
        className="button is-success is-pulled-right"
        type="submit"
        value="Submit"
      />
    </form>
  </div>
);

export default withRouter(NewPost);
