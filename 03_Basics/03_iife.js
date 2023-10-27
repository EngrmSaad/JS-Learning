// Immediately Invoked Function Expression
/* 
    Used to immediate execution and avoid global scope pollution

    Decleared with ()(); First () is for Function decleration and 
    second () is for execution.
    iife must be end with ;
*/

(
    // Named IIFE
    function chai(){
        console.log("Hi");
    }
)();

(
    // Unnamed IIFE
    () => (
        console.log("Hello")
    )
)();