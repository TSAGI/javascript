// const cart = require('./asgnm_14_data');
var cart=[
    {"name":"Biscuits", "type":"regular", "category":"food", "price": 2.0},
    {"name":"Water Melon", "type":"regular", "category":"food", "price": 12.0},
    {"name":"Beef", "type":"regular", "category":"food", "price": 21.0},
    {"name":"Carrots", "type":"regular", "category":"food", "price": 5.0},
    {"name":"Monitor", "type":"prime", "category":"tech", "price": 119.99},
    {"name":"Mouse", "type":"prime", "category":"tech", "price": 25.50},
    {"name":"dress", "type":"regular", "category":"clothes", "price": 49.90},
    {"name":"keyboard", "type":"prime", "category":"tech", "price": 60.50},
    {"name":"Woofer", "type":"prime", "category":"tech", "price": 50.50},
    {"name":"Charger", "type":"regular", "category":"tech", "price": 10.50},
    {"name":"USB-hub", "type":"prime", "category":"tech", "price": 60.30},
    {"name":"modem", "type":"prime", "category":"tech", "price": 30.50},
    {"name":"Switch", "type":"regular", "category":"tech", "price": 70.50},
    {"name":"Head-set", "type":"prime", "category":"tech", "price": 60.50},
    {"name":"keyHolder", "type":"regular", "category":"clothes", "price": 90.50},
    {"name":"Google-home", "type":"prime", "category":"tech", "price": 40.50},
    {"name":"SmartWatch", "type":"regular", "category":"tech", "price": 60},
    {"name":"keurig", "type":"prime", "category":"tech", "price": 10.50},
  ]

var prime = cart.filter(item => item.type==='prime');
var regular = cart.filter(item => item.type==='regular');


document.addEventListener('DOMContentLoaded', (event) => {
    var dino = document.querySelector('img');
    console.log(dino);
});

onInputChange = (e) => {
    console.log(e.target.value);
    if(e.target.value.length >= 10){
        document.querySelector('#error').innerText = 'The length of your text cannot be more than 10 letters.';
        document.querySelector('input').value = '';
        document.querySelector('#namelist').innerHTML = '';
    }
    else {
        document.querySelector('#error').innerText = '';
        onBtnClick();
    }
}

onBtnClick = () => {
    let para = document.createElement("p");
    para.innerText = document.querySelector('input').value;
    para.classList.add('box');
    if(para.innerText!=''){document.querySelector('#namelist').appendChild(para);}
    document.querySelector('input').value = '';
}

loadData = () => {
    
    // cart.forEach(item => {
    //     let dataPar = document.createElement('p');
    //     dataPar.innerText = `${item.type.toUpperCase()}: ${item.name}, price: $${(item.price).toFixed(2)}`;
    //     dataDiv.appendChild(dataPar); 
    // });
    let loadDataDiv = document.createElement('div');
    loadDataDiv.id = "loadData";
    let regDiv = document.createElement('div');
    regDiv.id = "regular";
    let regTitle = document.createElement('h3');
    regTitle.className = "title";
    regTitle.innerText = "regular items";
    regDiv.appendChild(regTitle);
    regular.forEach(item => {
        let regPar = document.createElement('p');
        regPar.innerHTML = item.name + "<span class='price'>$" + item.price.toFixed(2) + "</span>";
        regDiv.appendChild(regPar); 
    });

    let primDiv = document.createElement('div');
    primDiv.id = "prime";
    let primTitle = document.createElement('h3');
    primTitle.className = "title";
    primTitle.innerText = "prime items";
    primDiv.appendChild(primTitle);
    prime.forEach(item => {
        let primPar = document.createElement('p');
        primPar.innerHTML = item.name + "<span class='price'>$" + item.price.toFixed(2) + "</span>";
        primDiv.appendChild(primPar); 
    });
    loadDataDiv.appendChild(regDiv);
    loadDataDiv.appendChild(primDiv);

    document.querySelector('#loadButton').insertAdjacentElement('afterend', loadDataDiv);
    
}