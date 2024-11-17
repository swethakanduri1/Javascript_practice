
// singleton
// Object.create is use to creae obj as part of a constructoer which is singleton method

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "swetha",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"=overrides the values
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);=doesnt change email

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting);=gives[ function (anonymus)]
console.log(JsUser.greeting());=error saying greeting is nt a function if we freez the obj else we get hello js user
console.log(JsUser.greetingTwo());=hello js user,swetha
