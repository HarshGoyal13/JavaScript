


// Strings Methods



let naam = "Harsh@gmail.com";
let naam2 = "          Harshgoyal@gmail.com";


// 1. SUBSTR

// In case of substr we got string from passing index, and in this string include passing index tooo., and second we pass length
console.log(naam.substr(2, 5)); 

// In this case, string index count from last , and seconf paramter is length
console.log(naam.substr(-5, 5)); 

// In this output is nothing, because length can never be in (-)
console.log(naam.substr(-5, -5)); 

console.log("---------------------------")



// 2.SUBSTRING


// In this we pass first parameter is starting index of string,
console.log(naam.substring(2)); 

// In this we pass first parameter is starting index of string, and second we pass ending index of string, but in this eding index is not included in output.
console.log(naam.substring(2,5)); 

// in this situation whenever our starting point is greater than ending point, than swaping of values happens. 
console.log(naam.substring(5,2)); 

// whenever negative values are encountered , they are allocated to 0;
console.log(naam.substring(-5,2)); 


console.log("---------------------------");



// 3. INDEXOF

// returns index of a
console.log(naam.indexOf("a"))

// in this we pass value of how many indexes we skip in string, but ending index not include
console.log(naam.indexOf("a", 5))

console.log("---------------------------");



// 4. REPLACE

console.log(naam.replace("a", "m"))


console.log("---------------------------");

// 5. REPLACE ALL

console.log(naam.replaceAll("a", "m"))


console.log("---------------------------");


// 6. REPEAT

console.log(naam.repeat(3));


console.log("---------------------------");


// 7. TO_UPPER_CASE

console.log(naam.toUpperCase());

console.log("---------------------------");


// 8. TO_LOWER_CASE

console.log(naam.toLowerCase());

console.log("---------------------------");



// 9.TRIM

// this trim all space from string
console.log(naam2.trim(" "));








 