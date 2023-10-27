/*
    Variable decleared inside scope{} can not exist outside that scope{}
    Variable decleared outside the scope{} can be access/change from inside of scope{}
    For passing value outside function we use return keyword
    code after return inside function will not run
*/

// let a = 300 // Global Variable

// function One(){
//     a = 30  // Var Used in this function only
//     return a+1
//     console.log("Hi!");
// }

// console.log(One())

// console.log(a)


console.log(addOne(3));

// Function decleared like below called function and can be called before declearation
function addOne(num){
    return num + 1
}


// Function decleared like below called expresion and cannot be called before declearation
const addTwo = function (num){
    return num + 2
}
console.log(addTwo(3));

