  document.addEventListener('DOMContentLoaded', () => {
    let mainDiv = document.querySelector('#cart_list');
    let button = document.querySelector('#cart_button').addEventListener('click', () => {
        cart.forEach((item, itemID) => {
            let cart_div = document.createElement('div');
            cart_div.setAttribute('id', `elm${itemID}`);
            cart_div.classList = "cart_item";
            cart_div.innerHTML = "<div class='type'>" + item.type + " item</div>" + 
            "<div class='category'>" + item.category + "</div>" + "<div class='name'>" + item.name + "</div>"
            + " <div class='price'>$" + item.price.toFixed(2) + "</div>"; 
            let remove = document.createElement('button');
            remove.addEventListener('click', (event) => deleteItem(event));
            remove.innerText = 'Remove';
            remove.id = 'remove_button';
            cart_div.appendChild(remove);
            
            mainDiv.appendChild(cart_div); 

        });
        
    })
});

deleteItem = (event) => {
    console.log(event.target.parentNode.id);
  var elem = document.getElementById(event.target.parentNode.id);
  elem.parentNode.removeChild(elem);
}
