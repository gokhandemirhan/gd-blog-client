
const PostsAPI = {
    base:'http://localhost:3000/api',
    getAllPosts: function() {
        return fetch(`${this.base}/posts`)
            .then(response => {
                return response.json();
            })
            .catch(error => {
                console.log(error)
            })
    },
    createNewPost:function (data) {
        return fetch(`${this.base}/posts`,{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                return response.json();
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export default PostsAPI;
