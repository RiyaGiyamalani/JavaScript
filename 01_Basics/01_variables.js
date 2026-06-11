const accountId = 15248
let accountEmail = "riya@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"     // allowed but not a good practice at all

let accountState          // will show undefined

// accountId = 7     not allowed

accountEmail = "riya11@gmail.com"
accountPassword = "2345"
accountCity = "Banglore"

console.log(accountId);

// semicolon does not matter in js, use it or not, as per your preference


/*
var and let both are for declaring variables, but prefer not to use var
because of issue with block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
