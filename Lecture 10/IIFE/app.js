




// IMEDIATELY INVOKED FUCNTION

// - GLOBAL SCOPE K POLLUTION SE PROBLEM HOTI HAI KAYI BAAR, JO BHI US GLOBAL K VARIABLE OR DECLARATION KA POLUTION HAI USSE BACHNE K LIYE IIFE USE KARTE HAI


/* 
In JavaScript, variables declared at the global level are accessible throughout the program,
 which can cause naming conflicts and unintended side effects. By using an IIFE, 
 all variables declared inside the function are scoped to that function and don't interfere with the global scope.

*/

(func = ()=> {
    console.log("hello");
})();


// ()() -> IN THIA FIRST BRACKET FOR OUR FUNCTION DEFINATION , AND SECOND FOR EXECUTION


