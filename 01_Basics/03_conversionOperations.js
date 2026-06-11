let score = "86"
let score1 = "86abc"

console.log(typeof score);

let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)

console.log(typeof valueInNumber);    //results number
console.log(typeof valueInNumber1);   //also results number

console.log(valueInNumber);     //results 86
console.log(valueInNumber1);    //results NaN => Not a Number


let score2 = null
let valueInNumber2 = Number(score2)
console.log(valueInNumber2);                 //results 0



let score3 = undefined
let valueInNumber3 = Number(score3)
console.log(valueInNumber3);                 //results NaN


let score4 = true
let valueInNumber4 = Number(score4)
console.log(valueInNumber4);                 //results 1



let isLoggedIn = 1
let BooleanIsLoggedIn = Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn);                 //results true


let isLoggedIn1 = ""
let BooleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(BooleanIsLoggedIn1);                 //results false


let isLoggedIn2 = "Riya"
let BooleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(BooleanIsLoggedIn2);                 //results true




/*
Summary
in Number Conversion
"89" => 89
"89abcd" => NaN (Not a Number)
true => 1
false => 0
null => 0
undefined => NaN


in Boolean Conversion
1 => true
0 => false
"" => false
"nonEmptyString" => true


similarly we can convert to String, Object etc. as well
*/