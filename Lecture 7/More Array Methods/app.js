



// FOR-EACH  - METHOD
//  - IT ACCEPTS A CALLBACK FUNCTION
//  - THIS CAN NOT RETURN ANYTHING, THIS JUST FOR IETRATING


let arr = ["harsh", 34, true, "akash", 45];

arr.forEach(function(i, index){
    console.log(`${i} at index ${index}`);
});


console.log("----------------------------")



// MAP
// - IT ACCEPTS A CALLBACK FUNCTION
// - IT RETURNS A NEW ARRAY

let marks = [22,33,56,989];
 
let newMarks = marks.map(function(i, index){
    return [i*2, index];
})

console.log(marks);
console.log(newMarks); // this will console new array



console.log("----------------------------")



// FILTER
// - IT ACCEPTS A CALLBACK FUNCTION
// - IT RETURNS A NEW ARRAY
// - IT ONLY SENDS THE TRUTHFULL VALUE TO THE NEW ARRAY
// - IN FILTER WE CANNOT ACCESS INDEX

let arr2 = [33,44,7,655,44, 99, 1110, 101,89];

 let filteredArray = arr2.filter(function(i){
    if(i > 88){
        return true;
    }
    return false;
})

console.log(arr2);
console.log(filteredArray);  // this will console new array


console.log("----------------------------")


// SORT
// - THIS SORT LEXICOGRAPHY
// - IT ACCEPTS A CALLBACK FUNCTION


let arr4 = [44,62,9,161,10, 22];
let ans = arr4.sort();
console.log(ans);





