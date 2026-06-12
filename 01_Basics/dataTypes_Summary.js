// Primitive Datatypes
// Always called by value  (Changes made in a copy)
// 7 : String, Number, Boolean, null, undefined, Symbol (Used to make a value unique), BigInt


// Nothing special for decimals, that too is number

// Reference (Non-Primitive) DataType
// Array, Objects, Functions


/* JavaScript is a dynamically typed language. 
This means you do not need to explicitly declare the data type of a variable when you create it.
Instead, the JavaScript engine automatically determines the data type at runtime 
based on the value currently assigned to it.
*/

// const id1 = Symbol('124')
// const id2 = Symbol('124')

// console.log(id1 == id2);     //gives false

// const bigNo = 18014398509481984n

// console.log(typeof bigNo);      //gives bigInt

// const names = ["abc", "def", "ghi", "jkl"]   //array
// let myObj = {
//     name : "Riya",
//     age : 20
// }                             //object

// const myFunction = function(){
//     console.log("Hello")
// }


// console.log(typeof myFunction);      //gives function but is actually object function



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 2 types of memory: Stack and Heap
// Stack(Primitive), Heap(Non-Primitive)

let myYoutubeName = "Scrolled Emotions"
let anotherName = myYoutubeName

anotherName = "Riya Recommends"

console.log(anotherName);                   //Gives Riya Recommends
console.log(myYoutubeName);                 //Gives Scrolled Emotions

//Because it is copied, i.e. called by value, not by reference


let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "user2@gmail.com"

console.log(user1);          //{ email: 'user2@gmail.com', upi: 'user@ybl' }
console.log(user2);          //{ email: 'user2@gmail.com', upi: 'user@ybl' }

//Why? Called by Reference from the heap memory


