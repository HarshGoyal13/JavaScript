

/* 
Arrays
-> Data Structure
-> Ordered Data Structure -> (Jis Order me value store karte hai, usi order me store bhi hota hai)
-> Hetrogenous types (Disimolar data can also be stored)
*/



let arr = [1,3,"harsh", null, undefined, true];
console.log(arr);
 

console.log(arr.length); // Property


let ans = console.log(arr[2]);  // we can not store value, this prints arr[2], this can only do console operation

console.log(typeof(ans)); // this return undefined, because  we do only store value, we can not store any operation



let arr2 = [1,3,"harsh", null, undefined,[10,11,112, ["Kartik", 9], 8], true];

// i access Nested Arrays through this
console.log(arr2[5][3]);
console.log(arr2[5][3][1]);
