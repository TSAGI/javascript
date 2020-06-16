document.addEventListener('DOMContentLoaded', (event) => {
    var dino = document.querySelector('img');
    console.log(dino);
});

onInputChange = (e) => {
    console.log(e.target.value);
    var div = document.querySelector('#namelist');
    var para = document.createElement("p");
    para.innerHTML = e.target.value;
    div.appendChild(para);    
}

onBtnClick = () => {
    console.log('Button is being clicked!!');
}