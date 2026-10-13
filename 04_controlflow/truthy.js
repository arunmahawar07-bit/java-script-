const useremail = []
if (useremail) {
    console.log('got user email');
    
} else{
    console.log("don't have user email.");
    
}

// flasy value
// false,0,-0,bigint(0n),null,undefined,NaN

//truthy value
// "0",'false'," ",[],{},function{}
 if (useremail.length===0) {
    console.log('array is empty');
    
 }

 const emptyobject = {}
 if (Object.keys(emptyobject).length===0){
    console.log('object is empty.');
    
 }

 // nullish coalescing operator  (??): null undefined

let val1;
// val1=5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 100 
console.log(val1);

// terniary operators
//  condition ? true : flase
const iceteaprice = 100
iceteaprice>=80 ? console.log("less than 80.") : console.log
("more than 80.");
