import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PostsAPI from "../api/api";
import { withRouter } from 'react-router-dom'

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {newPost: {title:'',content:''}};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const targetName = event.target.name;
        const newPost = this.state.newPost;
        if(targetName === "title") {
            newPost.title = event.target.value;
        }else if(targetName === "content"){
            newPost.content = event.target.value;
        }
        this.setState({newPost});
    }

    handleSubmit(event) {
        const data = this.state.newPost;
        PostsAPI.createNewPost(data).then(json=>{
            console.log(json);
            this.props.history.push('/posts')
        })
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Title:
                        <input type="text" name="title" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Content:
                        <textarea name="content" value={this.state.value} onChange={this.handleChange}></textarea>
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

NewPost.propTypes = {};

export default withRouter(NewPost);
