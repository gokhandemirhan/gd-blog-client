import React, {Component}  from 'react'
import NewPost from '../components/NewPost'
import PostsAPI from "../api/api";

class NewPostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit:false,
            newPost: {title:'',content:''}
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
        }
        this.setState({newPost});
    }
    handleUpdate(postId,event){
        const data = this.state.newPost;
        PostsAPI.updatePost(postId,data).then(json=>{
            this.props.history.push('/posts')
        });
        event.preventDefault();
    }
    handleCreate(event){
        const data = this.state.newPost;
        PostsAPI.createNewPost(data).then(json=>{
            this.props.history.push('/posts')
        });
        event.preventDefault();
    }
    handleSubmit(event) {
        const isEdit =  this.state.isEdit;
        if(isEdit){
            this.handleUpdate(isEdit,event);
        }else{
            this.handleCreate(event);
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
