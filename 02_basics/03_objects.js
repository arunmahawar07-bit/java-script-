// singleton
// object.create (also known as constructor method)

// objext literals
const mySym = Symbol("key1") //use the sqaure bracket [] for the symbol so that it just show the data type symbol.
const jsuser = {
    name: "arun",
    "full name":"arun mahawar",
    [mySym]: "mykey1",
    age: 21,
    location: "jaipur",
    email: "arunnmahawar@gmail.com",
    isLOggedin: false,
    LastLoginDays: ["monday","saturday"]
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);

// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);
// console.log(typeof jsuser[mySym]);


jsuser.email="arunmahawar07@gmail.com"
// Object.freeze(jsuser)
jsuser.email="arunmahawar08@gmail.com"
// console.log(jsuser);

jsuser.greeting=function(){
    console.log('hello user.');
}
jsuser.greetingtwo=function(){
    console.log(`hello user,${this.name}`);
}
// console.log(jsuser.greeting);
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());
