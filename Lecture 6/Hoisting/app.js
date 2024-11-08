


// Ques 1
var a = 20;
function func(){
    console.log("Inside Function");
}
console.log(a);
func();

console.log("----------------------------")


// Ques 2   
console.log(b)  // -> HOISTING - WHENEVER YOU ACCESS A VARIABLE/FUNCTION EVEN BEFORE ITS DECLARATION THAT CONCEPT IS CALLED IS HOISTING
fun2(); 

function fun2(){
    console.log("Inside function 2");
}
var b =  70;


console.log("----------------------------")


// Ques 3
console.log(c);  // this give error because we can't  access variable before iniloziation with let & const, and in this hoisting happens but in DEAD TEMPORAL ZONE
func3();
function func3(){
    console.log(c);
    console.log("Inside Function 3");
}
let c = 45;


console.log("----------------------------")