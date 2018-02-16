const PostsAPI = {
  base: "http://localhost:3000/api",
  getAllPosts: function() {
    return fetch(`${this.base}/posts`)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error);
      });
  },
  createNewPost: function(data) {
    return fetch(`${this.base}/posts`, {
      method: "POST",
      body: data,
      headers: {
        // "Content-Type": "multipart/form-data"
      }
    })
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error);
      });
  },
  deletePost: function(postId) {
    return fetch(`${this.base}/posts/${postId}`, {
      method: "DELETE",
      body: JSON.stringify({ id: postId }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error);
      });
  },
  updatePost: function(postId,data) {
    return fetch(`${this.base}/posts/${postId}`, {
      method: "PUT",
      body: data,
      headers: {
        // "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error);
      });
  },
  getPostById: function(postId) {
    return fetch(`${this.base}/posts/${postId}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error);
      });
  }
};

export default PostsAPI;
