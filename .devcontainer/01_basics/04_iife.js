// Immediately Invoked Function Expressions (IIFE).is a function that is defined and executed immediately after its creation. It is often used to create a private scope and avoid polluting the global namespace.
//()()
// when two iife is executed always use ;
//this is named iife:it has name chai
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// this is unnamed iife:use arrow function
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('swetha')
