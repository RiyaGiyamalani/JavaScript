const score = 45

const totalScore = new Number(46)

console.log(score);                    //45
console.log(totalScore);               //[Number: 46]

console.log(typeof totalScore.toString())                //string

console.log(totalScore.toFixed(2));                     //gives 46.00

const otherNumber = 23.896624

console.log(otherNumber.toPrecision(3));                //gives 23.9
//but if the no. would have been 123.896624 then it would have given 124 
// (so 3 here is the no. of digits we want inn the answer)
//Returns a string containing a number represented either in exponential 
// or fixed-point notation with a specified number of digits.
//precision — Number of significant digits. Must be in the range 1 - 21, inclusive.

const hundreds = 1000000
console.log(hundreds.toLocaleString());       //gives 1,000,000 bydefault of US standards
console.log(hundreds.toLocaleString('en-IN'));  //gives 10,00,000 i.e. according to indian standards

console.log(Number.MAX_VALUE);                  //1.7976931348623157e+308 similarly min






//+++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++




//default library of JS


console.log(Math)               //Gives  Object [Math] {}

//.abs() for mod
//.round() for roundoff
//.ceil() , .floor()
//.min() , .max()  in array

console.log(Math.random());           //lies between 0 and 1, 1 exclusive

console.log((Math.random() * 10) + 1);          // to generate No. bw 1 and 11-

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
