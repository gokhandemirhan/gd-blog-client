
const PostsAPI = {
    base:'http://localhost:3000/api',
    posts: [
        { number: 1, name: "Ben Blocker", position: "G" },
        { number: 2, name: "Dave Defender", position: "D" },
        { number: 3, name: "Sam Sweeper", position: "D" },
        { number: 4, name: "Matt Midfielder", position: "M" },
        { number: 5, name: "William Winger", position: "M" },
        { number: 6, name: "Fillipe Forward", position: "F" }
    ],
    all: function() {
        return fetch(`${this.base}/posts`)
            .then(response => {
                return response.json();
            })
            .catch(error => {
                console.log(error)
            })
    },
    get: function(id) {
        const isPost = p => p.number === id;
        return this.posts.find(isPost)
    }
}

export default PostsAPI;
