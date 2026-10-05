const score = 200
console.log(score);

const balance = new Number(400)
console.log(balance);

console.log(balance.toString());
console.log(typeof balance);
console.log(balance.toFixed(2));

const otherNumber = 123.8976
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));




// +++++++++++++++++MATHS+++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(3,2,4,1,5));
console.log(Math.max(3,2,4,1,5));

// math.random it always varies between 0<random<1
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10 + 1));

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);




