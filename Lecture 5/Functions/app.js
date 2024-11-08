



// FUNCTIONS

// - FUNCTIONS ARE HEART OF JAVASCRIPTS
// - EK PROGRAM KOI KAAM KAR RHA HAI, JAB HAM USE KARNE KO BOLE


// Define Function

function sum (){
    let num1 = 10;
    let num2 = 40;
    console.log(num1+num2);
}
// Function Call -> sum()
console.log(sum()); //This gives value and undefined too

console.log("--------------------------------------");

function triple(num3){  //  PARAMETERISED FUNCTION -> Arguments
    let num1 = 10;
    let num2 = 40;
    console.log(num1+num2+num3);
}
triple(30);

console.log("--------------------------------------");


function sum2(){
    let num1 = 10;
    let num2 = 40;
    return(num1+num2);
}
sum2(); // because of returning statement , function returns value and save it at calling
console.log(sum2());


console.log("--------------------------------------");


// MULTIPLE PARAMETERS
function sum3(num1, num2){
    return(num1+num2);
}
console.log(sum3(30,40));

console.log("--------------------------------------");


function sum4(num1, num2){
    return(num1+num2);
}
console.log(sum3(30));  // tHIS RETURNS NAN


console.log("--------------------------------------");



// DEFAUKT PARAMETERIESD FUNCTION
function sum5(num1, num2 = 90){  // Default parameter
    console.log(num1);
    console.log(num2);
}

sum5(50);
sum5(50, 60); // WHENERVER I GIVE VALUES, THESE OVERRIDE DEFAULT VALUES


console.log("--------------------------------------");


function sum6(num1=90, num2){  // Default parameter
    console.log(num1);
    console.log(num2);
}
sum6(50);  // IN THAT CASE , ORDERING ARE MATTER, IN THIS PARAMTER GAVE TO NUM1 



 