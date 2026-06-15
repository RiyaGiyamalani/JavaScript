// Array

//is an object in js

const arr1 = [0, 1, 2, 3, 4, 5, "riya", true]    

//JavaScript arrays are resizable and can contain a mix of different data types. 
//Called by reference

const arr2 = new Array(1, 2, 3, 4, 5)

console.log(arr1[2]);


//Array methods

arr2.push(7)
console.log(arr2);        //[ 1, 2, 3, 4, 5, 7 ]
arr1.pop()
console.log(arr1);        //[0,1,2,3,4,5,'riya']
arr2.unshift(6)
console.log(arr2);        //[6, 1, 2, 3, 4, 5, 7]    i.e. inserts at beginning
arr2.shift()              
console.log(arr2);        //[ 1, 2, 3, 4, 5, 7 ]     i.e. deletion at beginning




console.log(arr2.includes(10));           //false
console.log(arr2.indexOf(10));            //-1
const newarr = arr2.join()
console.log(newarr);                     // string 1,2,3,4,5,7




//slice, splice
const a1 = arr2.slice(1, 4)
console.log(a1);                  //[ 2, 3, 4 ]     1 inc, 4 exc
console.log(arr2);                //[ 1, 2, 3, 4, 5, 7 ]   no changes to original array




const a2 = arr2.splice(1, 4)
console.log(a2);                  //[ 2, 3, 4, 5 ]   1,4 both inc
console.log(arr2);                 //[ 1, 7 ]      spliced elements removed from the original array



