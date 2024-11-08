



// CALLBACK FUNCTION
// - IS A FUNCTION PASSED INTO ANOTHER FUNCTION WHEN  IS IT THEN INVOKED INSIDE THE FUNCTION


function a(b){  // here B is my callback function
    b();     // Invoking callback function
    console.log("Inside A")
}

function b(){
    console.log("Inside B")
}

a(b)

