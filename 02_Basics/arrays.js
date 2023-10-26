// let cities = ["Karachi", "Lahore", "Islamabad"]
// console.log(cities)

// Add New Element to Array
// cities.unshift("Quetta")    // Add Quetta as last element of array
// cities.push("Quetta")       // Add Quetta as first element of array
// console.log(cities)

// Remove Element from Array
// cities.pop()                // Remove Last Element of array and return its value   
// cities.shift()              // Remove First Element of array and return its value
// console.log(cities)

// Add element at any point of array and remove multiple elements from any point of array
// cities.splice(1,3,"city1")  // Remove 3 Elements from index 1 and insert city1 at index 1  
// console.log(cities)

// console.log("B ", cities.slice(1,2))

let marvelHeros = ["Captain America", "Ironman", "Thor"]
let dcHeros = ["Superman", "flash", "Batman"]

// Join two arrays
// marvelHeros.push(dcHeros)   // Add whole array as element of first array and made changes to original array
// console.log(marvelHeros)    // ['Captain America', 'Ironman', 'Thor', [ 'Superman', 'flash', 'Batman' ]]

// let allHeros = marvelHeros.concat(dcHeros)   // Add all elements of dcHeros in marvelHeros as elements
// console.log(allHeros)    // [ 'Captain America', 'Ironman', 'Thor', 'Superman', 'flash', 'Batman' ]

// let allHeros = [...marvelHeros, ...dcHeros]   // Add all elements of dcHeros in marvelHeros as elements
// console.log(allHeros)    // [ 'Captain America', 'Ironman', 'Thor', 'Superman', 'flash', 'Batman' ]

    

// let newArray = Array.of("Saad","Wajiha","Saadia","Aezaz") // Return Array with all strings as element of array
let newArray = Array.from("Saad")   // Return array [ 'S', 'a', 'a', 'd' ]
console.log(newArray);





/*
    Array can store all dataTypes, 
    we can also store values with multiple datatypes in single array

    push(Elements) => Push Elements in end of array
    pop() => Remove last element of array, Return removed element

    unshift(Elements) => Add Elements at start of array
    shift() => Remove First Emement of Array, Return removed element

    splice(Start, Delete(# of Elements), Elements) => 
        Insert Elements at any specific index of array
        Remove Single or multiple elements from any point of array
        can perform both insert & remove with single command
        Return removed elements

    slice(Start, end) => Return an array with elements from start index to element before end index

    includes(Element) => Check element in array and return answer in boolean
    indexOf(Element) => Return Index of Element & -1 if Element not found
*/