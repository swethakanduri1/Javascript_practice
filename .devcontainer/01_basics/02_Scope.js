//var c = 300,scope is defined by {} and in let,const,var Var can be accessed outside the scope
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);=inner 10
    
}



// console.log(a);300
// console.log(b);20
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}

// this throes a errror because addtwo is called before func def
// this is called function hoisting.Function declarations are hoisted, so they can be called before their definition.
//Function expressions are not hoisted, so they must be defined before they are called.

addTwo(5)
const addTwo = function(num){
    return num + 2
}
