// Given is some user info in data.js
// Create a html page that displays each user info in a card format using js
// Each card should contain - Name , eamil , address in a sentence 
// Info should be displayed on loading the html page
// add delete button to each user to delete the respective user from html
document.addEventListener('DOMContentLoaded', () => {
    let mainDiv = document.querySelector('#dataList');
    data.forEach((element, elementID) => {
        let dataDiv = document.createElement('div');
        dataDiv.setAttribute('id', `elem${elementID}`);
        dataDiv.classList = 'dataElement';
        dataDiv.innerHTML = "<div class='name'><span class='attr'>Name:</span> " + element.name + "</div>" + 
            "<div class='email'><span class='attr'>Email:</span> " + element.email + "</div>" + 
            "<div class='street'><span class='attr'>Address:</span> " + element.address.street + "</div>"
            + " <div class='suite'>" + element.address.suite + "</div>" + 
            "<div class='city'>" + element.address.city + "</div>" + 
            "<div class='zipcode'>" + element.address.zipcode + "</div>"; 
        let remove = document.createElement('button');
        remove.addEventListener('click', (event) => deleteItem(event));
        remove.innerText = 'Delete';
        remove.id = 'deleteButton';
        dataDiv.appendChild(remove);
            
        mainDiv.appendChild(dataDiv); 

    });
});

deleteItem = (event) => {
    console.log(event.target.parentNode.id);
  var elem = document.getElementById(event.target.parentNode.id);
  elem.parentNode.removeChild(elem);
}
