var posts;

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((e) => e.json())
    .then((posts) => {
        processPosts(posts);
    })
});

processPosts = (posts) => {
var postDiv = document.querySelector('#postList');
posts.filter(element => element.userId===3).forEach(post => {
    let dataDiv = document.createElement('div');
    dataDiv.innerHTML = post.title;
    postDiv.appendChild(dataDiv);
    });
};
