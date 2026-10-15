const coding = ["js","java","cpp","ruby"]

// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)
//we need to give reference only not excecute it.


// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
    
// })

const mycoding = [
    {
        language: 'javascript',
        languagename : 'js'

    },
     {
        language: 'java',
        languagename:'java'
        
    },
     {
        language: 'python',
        languagename: 'python'
        
    },
]
mycoding.forEach( (item) => {
    console.log(item.language);
    
})