//if
// const isuserlogin = true
// if (3 != 3) {
//     console.log("get executed");
    
// }
// else{
//     console.log('not executed');
    
// }
// <,>,<=,>=,==,!=,===,!==

// const temprature = 41
// if (temprature === 40) {
//     console.log(`${temprature}<50`);
    
// }else{
//     console.log(`${temprature}>50`);
    
// }
// console.log("the code run perfectly");


// const score = 200
// if (score>100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);    
// }
// console.log(`user power: ${power}`);    it gives error because the element of
//of the functional scope is define inside their parameter but it is definer outside the 
//condition.

const balance = 1000
// if (balance>500) console.log("test"),// this is the implicate scope
// console.log('test2');
// very bad for use.

// if (balance < 500) {
//     console.log('less than 500.');
// } else if (balance<750) {
//     console.log('less than 750.');
    
// } else if (balance <900) {
//     console.log('less than 900.');
    
// } else {
//     console.log('less than 1200.');
    
// } 

const userloggedin = true
const debitcard = true
const userloggedinfromgoogle = false
const userloggedinfromemail = true

if (userloggedin && debitcard) {
    console.log('allow to buy courses.');
    
}
if (userloggedinfromgoogle || userloggedinfromemail) {
    console.log('allow user to login.');
    
}