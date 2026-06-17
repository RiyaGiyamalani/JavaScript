//objects using singleton (constructor)

const user = new Object()
// console.log(user);                       //{}

user.id = "abcd"
user.name = "riya"
user.isLoggedIn = false

// console.log(user);                      //{ id: 'abcd', name: 'riya', isLoggedIn: false }

const regularUser = {
    email: "xyz@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Riya",
            lastName: "Giyamalani"
        }
    }
}

console.log(regularUser.fullName.userFullName);     //{ firstName: 'Riya', lastName: 'Giyamalani' }
console.log(regularUser.fullName.userFullName.lastName);        //Giyamalani



const obj1 = {0: "a" , 1: "b"}
const obj2 = { 2: "c" , 3: "d"}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);                              //{ '0': 'a', '1': 'b', '2': 'c', '3': 'd' }

const obj3 = {...obj1, ...obj2}             //spread
console.log(obj3);                         //{ '0': 'a', '1': 'b', '2': 'c', '3': 'd' }

console.log(Object.keys(user));            //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(user));          //[ 'abcd', 'riya', false ]
console.log(Object.entries(user));         //[ [ 'id', 'abcd' ], [ 'name', 'riya' ], [ 'isLoggedIn', false ] ]

console.log(user.hasOwnProperty('isLoggedIn'));         //true

