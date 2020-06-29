document.addEventListener('DOMContentLoaded', () => {
    let mainDiv = document.querySelector('#postItList');
    let postAdd = document.createElement('button')
    let postDiv = document.createElement('div');
        postDiv.setAttribute('id', `elem${elementID}`);
        postDiv.classList = 'dataElement';
    let remove = document.createElement('button');
        remove.addEventListener('click', (event) => deleteItem(event));
        remove.innerText = 'Delete';
        remove.id = 'deleteButton';
        postDiv.appendChild(remove);
            
        mainDiv.appendChild(postDiv); 
})

deleteItem = (event) => {
    console.log(event.target.parentNode.id);
  var elem = document.getElementById(event.target.parentNode.id);
  elem.parentNode.removeChild(elem);
}