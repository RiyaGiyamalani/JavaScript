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



// ************** Operations **************
let value = 3;
let negativeValue = -value

console.log(negativeValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2**3)  //2 to the power 3
console.log(6%4)

let str1 = "Hello"
let str2 = " Riya"

let str3 = str1 + str2
console.log(str3)           //performs concatenation

console.log(1 + "2")        //shows 12 too
console.log("1" + 2)        //shows 12 too
console.log("1" + 2 + 2)        //shows 122
console.log(1 + 2 + "2")        //shows 32


console.log(+true)   //gives 1
console.log(+ "")   //gives 0


let num1, num2, num3, num4

num1 = num2 = num3 = num4 = 2 + 2   // assigns 4 to all
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)

let counter = 101
counter++
console.log(counter)      //102