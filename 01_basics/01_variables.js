const accountId=144553
let accountEmail="arunmahawar07@gmail.com"
var accountPassword="1223334444"
accountcity="jaipur"
let accountstate;
/*
variables can be declared as the account city.
but it is not a efficient way to use the variables in js
*/
accountEmail="hoe@google.com"
accountPassword="696969"
accountcity="delhi"


/*
prefer not use var
because of issue in block scope and functional scope
*/

// accountId=2 //this is not allowed
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountcity,accountstate])