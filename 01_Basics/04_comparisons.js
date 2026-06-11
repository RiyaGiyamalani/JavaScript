console.log(2 == 1)
console.log(2 <= 1)
console.log(2 < 1)
console.log(2 >= 1)
console.log(2 > 1)
console.log(2 != 1)





 console.log("2" >= 1)        //gives true as js directly converts string to no. and then compare
 console.log("02" >= 1)       // similarly true


 // But obviously not a good practice to compare different dataTypes

 
console.log(null == 0)     // false
console.log(null <= 0)     //true
console.log(null < 0)      //false
console.log(null >= 0)     //true
console.log(null > 0)      //false
console.log(null != 0)     //true


//Reason? Equality check and comparisons work differently,
//  comparisons convert null into a no., i.e. 0 
// whereas in equality check it is different for null and undefined



/*
While it is true that the loose equality operator (==) usually forces different data types 
into numbers, null is a special exception. According to the ECMAScript Specification, 
the rules for null and undefined during a == comparison are strictly isolated:
If one value is null and the other is undefined, return true.
If either value is null or undefined, 
and the other is any other type (like a number, string, or boolean), 
do not convert it—just return false.Because of this specific rule, 
JavaScript does not look at null as a numeric 0 during an equality check.
*/


// === strictly equal, checks value as well as dataType

console.log("2" === 2);    //false


// avoid such comparisons as long as possible
// always remember clean code is the prioriy
