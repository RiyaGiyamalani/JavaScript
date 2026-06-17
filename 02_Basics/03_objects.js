//object through constructor --> singelton
//object.create


//symbol declaration
const mySym = Symbol("key1")

//object literals --> not singleton
const jsUser = {
    name: "Riya",
    "full name": "Riya Giyamalani",
    [mySym]: "myKey1",
    age: 20,
    email: "riyagiyamalani@outlook.com",
    isLoggedIn: false
}

console.log(jsUser.age);                   //20  , not a good way
console.log(jsUser["age"]);                //20  , preferred way
console.log(jsUser["full name"]);          //only way in this case
console.log(jsUser[mySym]);                //way to use symbols in object and print


jsUser.email = "riyagiyamalani@gmail.com"
console.log(jsUser["email"]);              //changed

// Object.freeze(jsUser)             //locked
// jsUser.email = "riyagiyamalani@google.com"
// console.log(jsUser["email"]);              //unchanged i.e. riyagiyamalani@gmail.com

jsUser.greeting = function(){
    console.log("Welcome JS User");
}
//console.log(jsUser.greeting);               //[Function (anonymous)]
console.log(jsUser.greeting());               //Welcome JS User

jsUser.greeting2 = function(){
    console.log(`Welcome JS User ${this.name}`);
}
console.log(jsUser.greeting2());              //Welcome JS User Riya

//The reason of undefined is because the greeting function is not returning anything 
// it is just priniting thats why the return type is undefined
//Hence a better way would be

jsUser.greeting()               //Welcome JS User
jsUser.greeting2()              //Welcome JS User Riya