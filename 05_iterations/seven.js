let myNumbers = [1,2,3,4,5,6,7,8,9,10]

let  newNum = myNumbers.map((num)=>{
    return num + 10
})

// Chaining
newNum = myNumbers
            .map((num)=>(num*10))
            .map((num)=>(num+2))
            .filter((num)=>(num > 35))

console.log(newNum);