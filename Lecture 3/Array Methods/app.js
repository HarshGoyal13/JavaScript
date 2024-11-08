



// Arrays Methods Are two types - destructive  && Non-Destructive


// destructive - arrays me bhi change reflect ho, PERMANENT

// Non-Destructive - not chnage orignal array


let arr = [12,23,44];

// PUSH
arr.push(99);   //  destructive
console.log(arr)

// POP -> this access always last element, weatheri gave paramatere
arr.pop(); // destructive
console.log(arr)


arr.shift(); // destructive
console.log(arr.shift()); // this returns value that they shift, SAME IN POP
console.log(arr)


arr.unshift(100); // destructive , this returns also arrays of length, SAME IN PUSH
console.log(arr)


console.log("---------------------------------------------------------------")


                                    // SOME MORE METHODS


let arr2 = [2,3,4,5,6, 7, 8, 9];

// SLICE -> this return array from give index , NON-DESTRUCTIVE 

console.log(arr2.slice(2));  
console.log(arr2.slice(2, 4));  // in this start index is include, but ending index not;

console.log("-----------")

// SPLICE
 
console.log(arr2.splice(2,3)); //  this Removes array from starting index to ending index, but when swe give second parameter , this delete as length , DESTRUCTIVE 
console.log(arr2)


console.log(arr2.splice(2,3, "Harsh", true, 44)); // this remove elements from starting to  length , add add new elements which give on paramtere from where removing
console.log(arr2)


console.log("-----------")


// SPLIT - ONLY FOR STRING

let url = "https://online.codingblocks.com/app/player/303505/content/316276/16906/lecture"
let ans = url.split('/');
console.log(ans); // this returns array

console.log("-----------")

// JOIN -> for both
console.log(ans.join('/'));


console.log("-----------")



// CONCAT -> NON-DESTRUCTIVE -> STRING AND ARRAY BOTH

let arr3 = [1,2,3,4];
let arr4 = [5,6,7,8];
console.log(arr3.concat(arr4));  










