// primitive
// 7 types=> string,number,boolean,null,undefined,symbol,BigInt

/*
JavaScript is a dynamically typed language.
This means that you do not need to explicitly declare the data type of a variable when you
 create it. Instead, the JavaScript engine automatically determines the type at runtime 
 based on the value currently assigned to the variable.
*/ 
// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


const bignumber=12234343454565676898n 
console.log(typeof bignumber);

// non-primitive(reference)
// array,object,function

//array
const heros = ["stark","beretheon","targereyon"]

// object write in the form of key:"value" formate
// {
//     name:"arun",
//     age:22;
// }

//function
const myFunction=function(){
    console.log("hello world");
    
}



// ++++++++++++++ MEMORY ++++++++++++++++++
// stack(primitive),heap(non-primitive)

//stack
let userOne="arunmahawar"
let anotheruser="arunmahawar"
anotheruser="amanupadhyay"
console.log(userOne);
console.log(anotheruser);

//heap
let UserOne={
    email:"arun@google.com",
    upi:"arun@yjk"
}
let userTwo=UserOne
userTwo.email="am@google.com"
console.log(UserOne.email);
console.log(userTwo.email);

