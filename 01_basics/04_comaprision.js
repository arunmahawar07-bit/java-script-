// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 < 1);

//thhese kind of conversion can create confusion for the programmer
console.log("2" > 1);
console.log("02" > 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//this work differently in equality check == and in the comparision >,<,>=,<=
//comaprision convert null to a number comparing it as 0,
//  that is why the case three give true and the case 1 gives false.


// ===(strict check) it not only check the data but also their datatype also.
console.log("2" === 2);