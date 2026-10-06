/*
JavaScript Date objects represent a single moment in time in a platform-independent
 format. Date objects encapsulate an integral number that represents milliseconds since
  the midnight at the beginning of January 1, 1970, UTC (the epoch).
  the output of date is an object.
*/

//dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);//object


// let myCreatedDate = new Date(2026,0,06)
// console.log(myCreatedDate.toDateString());


// let myCreatedDate = new Date(2026,0,06,5,3)
// let myCreatedDate = new Date("2026-08-06")//yyyy-mm-dd
let myCreatedDate = new Date("09-06-2026")//mm-dd-yyyy
// console.log(myCreatedDate.toLocaleString());


let myTImeStamp = Date.now()
// console.log(myTImeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()); //for abhi tak ka tyime in milisecond
// console.log(Math.floor(Date.now()/1000));//we divide it with 1000 for get the seconds 
//after that we get the decimal value for that we do the floor value.


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long",

})

// ===========REVISE IT PROPERLY=============