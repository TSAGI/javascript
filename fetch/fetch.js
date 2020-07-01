document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(e => e.json())
    .then(names => {
        processNames(names);
    });
});

processNames = (names) => {
    let nameDiv = document.querySelector('#nameList');
    
    names.forEach((element) => {
        let dataDiv = document.createElement('div');
        dataDiv.classList = 'nameElement';
        dataDiv.innerHTML = "<div class='name'> " + element.name + "</div>" + 
            "<div class='email'> " + element.email + "</div>";
        nameDiv.appendChild(dataDiv);

        dataDiv.addEventListener('click', () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(e => e.json())
            .then(posts => { 
                let postDiv = document.querySelector('#postList');
                postDiv.innerHTML = "";
                posts.forEach(post => {
                    if(post.userId===element.id){
                    let newDiv = document.createElement('div');
                    newDiv.classList = 'postElement';
                    newDiv.innerHTML = "<div class='title'> " + post.title + "</div>" + 
                    "<div class='body'> " + post.body + "</div>";
                    postDiv.appendChild(newDiv);
                }
            })  
          })
        }) 
    })   
}

