const PostsAPI = {
    base: "http://localhost:3000/api/users",
    register: function(data) {
        return fetch(`${this.base}/register`, {
            method: "POST",
            body: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
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
