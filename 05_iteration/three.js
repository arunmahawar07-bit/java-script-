// for of
// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
    
// }

// const greeting = "helo world"
// for (const greet of greeting) {
//         console.log(`each char is ${greet}`);
        
//     }


// maps //known for unique value
const map = new Map()
map.set('in',"india")
map.set('usa',"america")
// console.log(map);
// for (const key of map) {
//     console.log(key);
    
// }

for (const [key,value] of map) {
    // console.log(key,":-",value);
    
}


// forof loop on the object

const myObject = {
    'game1':'nfs',
    'game2':'valo'
}
for (const [key,value] of myobject) {
    console.log(key,":-",value);
    
}

