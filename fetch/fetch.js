var posts = [];
document.addEventListener('DOMContentLoaded', async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then(e => e.json())
    .then(names => {
        processNames(names);
    });
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(e => e.json())
    .then(json => {
        posts = json;
    });
});

const postData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'life is good',
        body: 'hello world',
        userId: 1
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then(e => e.json())
    .then(json => console.log(json))
}

processNames = (names) => {
    let nameDiv = document.querySelector('#nameList');
    let postDiv = document.querySelector('#postList');
    let add = document.createElement('button');
    add.addEventListener('click', () => postData());
    add.innerText = 'Add Post';
    add.id = 'addButton';
    nameDiv.appendChild(add);

    names.forEach((element) => {
        let dataDiv = document.createElement('div');
        let id = element.id;
        dataDiv.classList = 'nameElement';
        dataDiv.innerHTML = "<div class='name'> " + element.name + "</div>" + 
            "<div class='email'> " + element.email + "</div>";
        dataDiv.addEventListener('click', (event) => {
            event.stopPropagation();
            postStuff(id);
        });
        let create = document.createElement('button');
        create.addEventListener('click', (event) => {
            event.stopPropagation();
            newForm(id);
        });
        create.innerText = 'Create Post';
        create.id = 'createButton';
        dataDiv.appendChild(create);
        nameDiv.appendChild(dataDiv);
    })   
}

postStuff = (id) => {
    let postDiv = document.querySelector('#postList');
    postDiv.innerHTML = "";
    posts.forEach(post => {
        if(post.userId===id){
            let newDiv = document.createElement('div');
            newDiv.classList = 'postElement';
            newDiv.innerHTML = "<div class='title'> " + post.title + "</div>" + 
            "<div class='body'> " + post.body + "</div>";
            postDiv.appendChild(newDiv);
    }
  })  
}

newForm = (id) => {
let formDiv = document.querySelector('#formContainer');
formDiv.innerHTML = "<form action='' onsubmit='return newPost(" + id + ")'>" +
"<label for='title'>Title:</label><br>" +
"<input type='text' id='title' name='title'><br>" +
"<label for='body'>Body:</label><br>" +
"<input type='textarea' id='body' name='body'><br><br>" +
"<input type='submit' id='submit' value='Submit'>" +
"</form>"
}

newPost = (id) => {
    let obj = {};
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    let userId = id;
    obj.userId = userId;
    obj.title = title;
    obj.body = body;
    posts.push(obj);
    postStuff(id);
    let formDiv = document.querySelector('#formContainer');
    formDiv.innerHTML = "";
    return false;
}
