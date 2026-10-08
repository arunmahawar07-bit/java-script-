// const tinderuser = new Object()
const tinderuser = {} //non singleton object

tinderuser.id="1223abc"
tinderuser.name="arun"
tinderuser.isloggedin=false
// console.log(tinderuser);

const regularuser={
    email:"abc@gmail.com",
    fullname:{
        userfullname:{

        
            firstname:"arun",
            lastname:"mahawar"
        }    
    }
}
// console.log(regularuser.email);
// console.log(regularuser.fullname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3=Object.assign({},obj1,obj2) //use to concatinate two pbject
const obj3={...obj1,...obj2}
// console.log(obj3);


// const user = {
//     {
//         id : 1,
//         email:"abc@gmail.com"
//     }
//     {
//         id : 1,
//         email:"abc@gmail.com"
//     }
//     {
//         id : 1,
//         email:"abc@gmail.com"
//     }
// }

// user[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty("isloggedin"));
//use this for check availibilty of object