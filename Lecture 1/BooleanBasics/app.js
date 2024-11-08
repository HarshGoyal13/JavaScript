  


let bool1 = true;
let bool2 = false;

// In this returns output true, in thi typecasting not happens
console.log(bool1);

let ans = bool1 == bool2;
console.log(ans)


let one = "true";
let ans2 = bool1 == one;

// this returns false, because string and bool are not equal
console.log(ans2);


let ans3 = (bool1 === bool2);
console.log(ans3);





let ans4 = (bool1 == 1);   // GENERAL EQUALITY

// TypeCasting Happens
// This returns true, there no checks dataType
console.log(ans4)

let ans5 = (bool1 === 1);   // STRICT EQUALITY

// This returns false, there's checks dataType
console.log(ans4)
