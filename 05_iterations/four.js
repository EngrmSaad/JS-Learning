const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    py: 'python'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const myArray = ['js','cpp','py']

for (const key in myArray) {
    console.log(`${key} of myArray contain ${myArray[key]}`);
}

// We can not iterate map by using for in loop
