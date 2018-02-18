import React, {Component}  from 'react'
import NewPost from '../components/NewPost'
import PostsAPI from "../api/api";

class NewPostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit:false,
            newPost: {title:'',content:'',photo:''}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        const isEdit = this.props.match.params.postId;
        this.setState({isEdit});

        if(isEdit){
            PostsAPI.getPostById(isEdit).then(json=>{
                this.setState({newPost:json.post})
            });
        }
    }
    handleChange(event) {
        const targetName = event.target.name;
        const newPost = this.state.newPost;
        if(targetName === "title") {
            newPost.title = event.target.value;
        }else if(targetName === "content"){
            newPost.content = event.target.value;
        }else if(targetName === "photo"){
            newPost.photo = event.target.files[0];
        }
        this.setState({newPost});
    }
    handleSubmit(event) {
        const postId =  this.state.isEdit;

        event.preventDefault();
        const data = this.state.newPost;
        const formData = new FormData();

        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('photo', data.photo);

        if(postId){
            PostsAPI.updatePost(postId,formData).then(json=>{
                this.props.history.push('/posts')
            });
            event.preventDefault();
        }else{
            PostsAPI.createNewPost(formData).then(json=>{
                this.props.history.push('/posts')
            });
        }
    }
    render() {
        return (
            <div>
                <NewPost newPost={this.state.newPost} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default NewPostPage;
