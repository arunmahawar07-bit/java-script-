//var c=300
let a=300

if(true){
    let a = 10
    const b = 20
    console.log("inner:",a);
}

// console.log(a);
// console.log(b);
// console.log(c);

//NESTED SCOPE
function one(){
    const username="arun"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
}
one()

if (true) {
    const username = 'arun'
    if (username==="arun") {
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

//+++++++++++ interesting +++++++++++

function addone(num){
    return num+1
}
console.log(addone(5));

addTwoNumber(5)//we can not pre-access function if we write it like this
const addtwo = function(num){
    return num+2
}