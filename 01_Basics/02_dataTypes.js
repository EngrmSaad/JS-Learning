"use strict"; // treat all JS code as newer version

// alert(3+3)  // We are using NodeJS not browser

/*
Premitive dataTypes (Stored in Stack Memory)

1. Number => 2 to power 53
2. BigInt
3. String => ""
4. Boolean => True/False
5. null => Standalone value 
6. undefined => variable not initiallized
7. symbol => unique
*/
let myNumber = 2
let BigInt = 2323423543645756858867867n
let myString = "My Name is Saad"
let isAlert = false
let emptyValue = null
let unknownVal
let mySymbol = Symbol('abc') //Symbol are unique even have same values


/*
Reference Type / Non Premitive Type (Store in Heap Memory)
1. Array
2. Object
3. Function
*/

let superHeros = ["Ironman", "AntMan"]

// Object
let myObj = {
    name: "Saad",
    age: 30
}

const myFunction = function(){
    console.log("Hello World")
}


/***************************/
let UserOne = {
    name: "Saad",
    age: 30
}
let UserTwo = UserOne

UserTwo.age = 32

console.log(UserOne)
console.log(UserTwo)


let varOne = "Saad"
let varTwo = varOne
varTwo = "Asad"

console.log(varOne)
console.log(varTwo)
