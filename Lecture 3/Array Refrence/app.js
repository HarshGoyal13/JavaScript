


// Change in one arrays is leading to change another array as well is called array is passed by REFRENCE

let arr1 = [1,2,3];
let arr2 = arr1;   // In memory , arr2 pointing to arr1

console.log(arr2);


arr1[0] = "harsh";
console.log(arr1);
console.log(arr2);


