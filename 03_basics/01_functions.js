function saymyname() {
    

console.log("a");
console.log("r");
console.log("u");
console.log("n");
}
// saymyname()

// function addTwoNumber(num1,num2) {
//     console.log(num1+num2);
    
        
// }
// addTwoNumber(4,6)
// const result = addTwoNumber(3,5)
// console.log("result:",result); ==the result says undefined in this situation it does noty rerutrn any value

function addTwoNumber(num1,num2){
    let result = num1+num2
    return result
    
}
const result = addTwoNumber(3,5);
// console.log("result:",result);


function loginusermessage(username){
    if(username===undefined){
        console.log("please enter the username.");
        return

    }
    return `${username} is loggeedd in successfully.}`

}
console.log(loginusermessage("arun"));