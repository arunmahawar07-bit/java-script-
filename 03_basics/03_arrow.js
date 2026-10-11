const user = {
    username:'arun',
    price:199,

    welcomemessage: function(){
        console.log(`${this.username},welcome to website `);
        console.log(this);
        
    }
}
// user.welcomemessage()
// user.username="ujjawal"
// user.welcomemessage()
// console.log(this);

// function chai (){
//     let username = "arun"
//     console.log(this.username);
    
// }
// chai()

// const chai=function(){
//     let username = "arun"
//     console.log(this.username);
// }
// chai()
//how to write arrow function
 const chai=()=>{
    let username = "arun"
    console.log(this.username);
}
// chai()
//     BAIC SYNTAX OF ARROW FUNCTION
// const add2 = (num1,num2)=>{
//     return num1+num2
// }

// IMPLICITE RETURN 
// const add2 = (num1,num2) =>  num1 + num2

// console.log(add2(4,6))

//if you want to retuen an onbject then 
const add2 = (num1,num2) =>  ({username:"arun"})

console.log(add2(4,6))


// example

const myarray = [3,4,6,2,7]
