// Singleton (Create wiht constructor, Unique Object)
// Object.create

// Object Literals

const jsUser = {
    name: "Saad",
    email: "Saad@gmail.com",
    age: 30
}

// console.log(jsUser.name);
// console.log(jsUser["email"]);

// jsUser.email = "abc"

// Object.freeze(jsUser) // Freeze objects after this command user can not made changes in object

// jsUser.email = "def"

// console.log(jsUser["email"]);


jsUser.greetings = function(){
    console.log("Hello JS User");
}

jsUser.greetingsTwo = function(){
    console.log(`Hello JS User: ${this.name}`);
}

console.log(jsUser.greetingsTwo())