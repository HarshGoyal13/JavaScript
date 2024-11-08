





// FUNCTION THAT OPERATE ON OTHER FUNCTION EITHER BY
// - TAKING THEM AS ASN ARGUEMENT  OR
// - RETUNRING THEM

// CALLED HIGHER ORDER FUNCTION


// CONDITION 1

function a(b){
    console.log("I am inside A");
    b();
}

function b(){
    console.log("i am inside B");
}

a(b);


console.log("-------------------------")

// CONDITION 2

function c(){
    console.log("I am inside C");
    
    function d(){
        console.log("I am inside D");
    }
    return d;
}

c();




// REAL LIFE EXAMPLE


function getBoolean(item){
    if(typeof(item) === 'boolean'){
        return true;
    }
}
function getString(item){
    if(typeof(item) === 'string'){
        return true;
    }
}
function getNumber(item){
    if(typeof(item) === 'number'){
        return true;
    }
}

function get(arr, fn){
    let result =[];
  for(let item of arr){
    if(fn(item)){
        result.push(item);
    }
  }
    return result;
}


let arr = ['harsh', 33, true, "okay"];

console.log(get(arr, getBoolean));
console.log(get(arr, getString));
console.log(get(arr, getNumber));


