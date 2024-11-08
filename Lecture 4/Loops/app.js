



// FOR
// WHILE
// DO-WHILE

// IN ECMA SCRIPT 6(ES6) - 2 NEW LOOPS ARE LANUNCHED -> 1. FOR IN , 2. FOR OFF




// FOR LOOP
for(let i = 0; i <= 5; i++){
    for(let j = 0; j <= 5; j++){
        if(i == j) break;
        console.log(i, j);
    }
}

console.log("-----------------------------------------");


// WHILE LOOP
let num = 100;
while(num >= 0){
    console.log(num);
    num = num-10;
}


console.log("-----------------------------------------");





// FOR IN -  - INSIDE OBJECT

// FOR OFF  - ITERABLE ITEMS (ARRAYS, MAPS LIST)



// FOR IN
let obj  = {
    name:"harsh",
    age:20,
    favColour:"black"
}

for(let item in obj){
    // In this,  ITEM gives only keys
    console.log(`${item} -> ${obj[item]}`);
}



console.log("-----------------------------------------");


// FOR OFF
let arr = ["harsh", true, 2 , 5, "akash"];

for(let item of arr){
    console.log(item);
}



