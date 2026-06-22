function addTwoNumbers(num1, num2){            //here num1 and num2 are parameters
    return (num1 + num2);
}
let res = addTwoNumbers(3,4)                     //here 3,4 are arguments     //7   
console.log("RESULT: " , res);                  //RESULT:  7


function userLoginMessage(username) {
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just Logged in`
}

console.log(userLoginMessage("Riya_Giyamalani"));
//Riya_Giyamalani just Logged in

console.log(userLoginMessage());      //Please enter a username -> undefined


// or we can give a default username, i.e. like
//function userLoginMessage(username = "Riya")


function calculateCartPrice(...num1){        //... here is rest operator
    return num1
}

console.log(calculateCartPrice(200,500,750));           //[ 200, 500, 750 ]


const user1 = {
    username : "Riya",
    cartPrice : 1999
}

function handleUser(anyObject){
    console.log(`Username: ${anyObject.username} , Cart Price: ${anyObject.cartPrice}`)
}

handleUser(user1)
//Username: Riya , Cart Price: 1999


const newArray = [10, 20, 30, 40]
function getSecondValue(getArray){
    return getArray[1]
}
console.log(getSecondValue(newArray));                      //20
