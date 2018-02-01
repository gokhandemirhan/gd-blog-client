import React from 'react'
import PostsAPI from '../api/api'

import Post from '../components/Post'

import PropTypes from 'prop-types';

class AllPosts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        var _this = this;
        PostsAPI.all().then(json => {
            console.log(json)
            const posts = json.posts;
            this.setState({ posts });
        })
    }

    render() {
        return (
            <div>
                <h2>All posts</h2>
                <ul>
                    {this.state.posts.map(post =>
                        <li key={post._id}><Post post={post}/></li>
                    )}
                </ul>
            </div>
        );
    }
}

AllPosts.propTypes = {};

export default AllPosts;
