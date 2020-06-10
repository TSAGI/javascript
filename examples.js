// Higher order array function.

// FOR EACH
let a = [1,2,3,'ELVIS',{name:'PETER'},[]];
a.forEach(function(element){
    return console.log(`this is ${element}`);
})

// ()=>{}
// a.forEach(element => console.log(`this is ${element}`));

//MAP
// let a = [1,2,4,6,5,7,1,0,8];
// a.map(function(elm) {
//     if(elm === 1) {
//         return elm + 10
//     }
//     return elm + 1
// });
// .forEach(function(element){
//     console.log(`The element is ${element}`)
// });

// FILTER
let a = [1,2,4,6,5,7,1,0,8]; 
a.filter(function(elm){
    return elm >= 2
});

const data = a.filter(elm => elm >= 2).map(e => e === 2 ? 'ELVIS' : e + 1);

a.filter(function(x) {
    return elm>=2
}).map(function(e){
    if(e === 2){
        return 'ELVIS'
    }
    return e + 1
});

// .forEach(function(value){
//     console.log(value)
// })   

Reduce
let a = [1,2,3,6]; 
let b = a.reduce((a,b) => a+b)
// console.log(b);

// --------------------------------------------
// closure or lexical closing of value

// let myData= {
//     firstName: 'Elvis',
//     lastName: 'Peter',
//     phone: '555555555',
//     fullName: function() {
//         return `I am ${this.firstName} ${this.lastName}`
//     }
// }

// console.log(myData.fullName())





// -> OBJECT destructuring[ES:6]
// let myData= {
//     firstName: 'Elvis',
//     lastName: 'Peter',
//     phone: '555555555'
// }
// const {firstName, lastName, phone} = myData;
// console.log(firstName);
// console.log(lastName);
// console.log(phone);

// -> Object Spreading
// let jobDetails = {
//     ...myData,
//     position: 'SR. Dev',
//     place: 'Bloor st w'
// }
// console.log(jobDetails)

// -> Array spreading [ES:6]
// let a = [1,2,4,6];
// let b = [5,7,1,0,8];
// console.log([...a,...b,900]);
// ----------------------------------------------
// ARROW FUNCTION.

// function hello() {
//     return 'bye'
// }

// const hello = () => {
//     if(true){

//     }
//     return ''
// }

// console.log(hello());