



// What is Object?

/*
DATA STRUCTURE
COLLECTION OF PROPERTIES -> properties are just pair or key & Value
IT IS UNORDER IN NATURE -> it's not neccessary, jis order me input do , or usi order me store bhi ho
*/

let obj = {
    // KEY : VALUE
    Name: "Harsh",  // PROPERTY 1
    Age: 13        // PROPERTY 2
};

console.log(obj);


// HOW TO ACCESS PROPERTIES -> DOT Operator
console.log(obj.Name);
console.log(obj.Age);



// console.log(obj[Age]);   this shows Refrence error , because in our memory - KEYS stored as Strings
console.log(obj["Age"]); // we access theough this


let obj2 = obj;  // In our memory , obj points to obj2, this also passed by refrence
obj.Name = "Akash"; 
console.log(obj2);