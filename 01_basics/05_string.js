const name="arun mahawar"
const repo=50
console.log(`hello my name is ${name} and my git repo count is ${repo}`);

const gameName=new String('ARUN-MAHAWAR')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('M'));

const newstring= gameName.substring(0, 5) //iin substring we can not givew the negative value,
//if we give negative value it start from 0 itself
console.log(newstring);

const anotherstring = gameName.slice(-2, 4) //it accepts the negative value 
console.log(anotherstring);


const newStringOne="  ARUN   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https:-arunmahawar%20arun07"
console.log(url.replace('%20' ,'--'));
console.log(gameName.split("-"));
