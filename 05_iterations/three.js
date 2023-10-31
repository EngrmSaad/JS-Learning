// For of

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }


//Maps

const map = new Map()
map.set('IN', 'India')
map.set('PK', 'Pakistan')
map.set('CA', 'Canada')


for (const [key, value] of map) {
    console.log(`Key: ${key} contain value: ${value}`);
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// objects are not iterateble using this method
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }