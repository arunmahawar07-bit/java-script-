// IMMEDIATLY INVOLED FUNCTION EXPRESSION
(function chai(){
    //the iife are named iife
    console.log(`db connected`);
})();

(function aurcode(){
    console.log(`they are the db connected`);
    
})();

/*
(1)(2)
(1)=>in this we write the funtion
(2)=>used to execute the function
*/
((name)=>{
    //because they haVE no name that is why they are simple iife
    console.log(`execution mode ${name}`);
    
})('Arun')
