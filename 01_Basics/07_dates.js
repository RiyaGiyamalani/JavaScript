let myDate = new Date()
console.log(myDate);              //2026-06-13T17:39:20.821Z
console.log(myDate.toString());   //Sat Jun 13 2026 17:40:38 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());  //Sat Jun 13 2026
console.log(myDate.toLocaleDateString());  //6/13/2026

console.log(typeof myDate);         //object



let myCreatedDate = new Date(2023, 0, 24)        //Months start with 0 in JS
console.log(myCreatedDate);      //2023-01-24T00:00:00.000Z
console.log(myCreatedDate.toDateString());    //Tue Jan 24 2023

let myCreatedDate1 = new Date(2023, 0, 24, 6, 30)
console.log(myCreatedDate1.toLocaleString());           //1/24/2023, 6:30:00 AM

let myCreatedDate2 = new Date("2023-01-24")
let myCreatedDate3 = new Date("01-24-2023")

console.log(myCreatedDate2.toDateString());           //Tue Jan 24 2023
console.log(myCreatedDate3.toDateString());           //Tue Jan 24 2023


let myTimeStamp = Date.now()
console.log(myTimeStamp);                //1781373176966
console.log(myCreatedDate.getTime());    //1674518400000
//This is in-order to compare

console.log(Math.floor(Date.now()/1000));  //to convert from milliseconds to seconds

//getMonth ,date, year, etc. are also available

let newDate = new Date()
newDate.toLocaleString('default' , {
    weekday: "long"
})
console.log(newDate.toLocaleString('default' , {
    weekday: "long"     ////Request the full weekday name
}));


//Tough topic, will come back to it again soon
//Also this was older way, will also learn to use Temporal