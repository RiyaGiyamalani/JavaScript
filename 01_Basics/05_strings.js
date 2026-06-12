const name = "Riya "
const age = 20
console.log(name + age + " Age")

//Not Recommended

console.log(`Hello, My name is ${name} and my age is ${age}`)

//use backticks (``), does the same work but it is more preferred and modern way
// called as string interpolation

//Another and more preferred way of declaring a string

const empName = new String("Riya")

//Why more preferred? Gives key value pair representation i.e. 0: R, 1:i, etc., length, 
//also various methods are available, like endsWith, constructor, concatinate, etc.

console.log(empName[1])    // gives i

console.log(empName.__proto__);            //gives {} i.e. object

console.log(empName.length);               //gives 4

console.log(empName.toUpperCase());       //gives RIYA, does not change original string obviously 

console.log(empName.charAt(2));           //gives y
console.log(empName.indexOf('y'));        //gives 2


const fullName = new String("Riya-Giyamalani")
const firstName = fullName.substring(0, 4)    // 0 inclusive, 4 exclusive 
console.log(firstName)                   //gives Riya



const lastName = fullName.slice(-10, 15)    // can give -ve indices, 15 exclusive 
console.log(lastName)                   //gives Giyamalani


const s1 = "      Riyaaaa     "
console.log(s1)
console.log(s1.trim())             //These spaces won't be displayed

const url = "https://www.linkedin.com/in/riya%20giyamalani/"

// now we don't want the %20 instead we want a dash
console.log(url.replace('%20' , '-'));

console.log(url.includes('giyamalani'));              //true


console.log(fullName.split('-'))              //converts to array [ 'Riya', 'Giyamalani' ]

