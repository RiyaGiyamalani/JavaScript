const fruits = ["apple", "mango", "banana", "orange"]
const veggies = ["tomato", "potato", "onion", "ladyfinger"]

// fruits.push(veggies)
// console.log(fruits)        
//['apple',  'mango',  'banana',  'orange',  [ 'tomato', 'potato', 'onion', 'ladyfinger' ]]
// i.e. array in array as another element, which we won't want


// console.log(fruits.concat(veggies))
//[  'apple',  'mango',  'banana',  'orange',  'tomato',  'potato',  'onion',  'ladyfinger']

const fruits_and_veggies = [...fruits , ...veggies]              //spread
console.log(fruits_and_veggies);
// same result but better way, more used


const newArray = [1, 2, 3, [4, 5], 6, [6, 7], 8, [8, 9]]
const newArray1 = newArray.flat()  
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//can also give the depth to flat the array in the argument, can also give infinity
console.log(newArray1);      //[  1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9]

console.log(Array.isArray("Riya"));        //false
console.log(Array.from("Riya"));          //[ 'R', 'i', 'y', 'a' ]

console.log(Array.from({name: "Riya"}));  // cannot hence gives empty array [], interesting from interview pov
//will need to specify to use, will learn later

let sc1 = 100
let sc2 = 200
let sc3 = 300

console.log(Array.of(sc1, sc2, sc3));     //[ 100, 200, 300 ]

