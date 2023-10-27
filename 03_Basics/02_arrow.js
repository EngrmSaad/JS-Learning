// const user = {
//     username: "Saad",
//     age: 30,
//     welcomeMessage: function(){
//         console.log(`Hi ${this.username}, Welcome to Website`);
//         // console.log(this)
//     }
// }

// user.welcomeMessage()
// user.username="Asad"
// user.welcomeMessage()

// console.log(this)

/*
    this - keyword used to return current contex
    when we call 'this' in global inside node environment it return empty object{}
    but wen it run in browser environment it return window object
*/

//-------------------------------- Main Topic ---------------------------------

// function one(){
//     let myName = "Saad"
//     console.log(this);
// }

// one()

// Basic Arrow Function Decleration
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(2,3))

// Implecit Decleration of Arrow Function
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username:"a"}) // Return Object
console.log(addTwo(2,3))