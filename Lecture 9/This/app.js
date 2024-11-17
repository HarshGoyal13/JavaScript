



// THIS KISKO POINT KAR RHA HAI , YE DECIDE HOGA APKI FUNCTION CALLING / INVOCATION SE
// 5 types


// - REGULAR FUNCTION INVOCATION

// WHENEVER A JS CODE IS RUN GEC IS CREATED, AND WHEN GEC IS CREATED ALONG WITH THAT A GLOBAL OBJECT IS ALSO CREATED, AND RIGHT NOW I AM WORKING MY BROWSER
// AND IN CASE OF BROWSER, MY GLOBAL OBJECT IS WINDOW OBJECT

function fn(){
    console.log(this);
}
fn();



// - METHOD INVOCATION

let obj = {
    name:"harsh",
    func : function(){
        console.log(this);
    }
}

obj.func(); // THIS IS POINTING TO THE OBJECT OVER WHICH IS CALLED

console.log("-------------------------")

// QUESTION
let obj2 = {
    name:"harsh",
    func : function(){
        console.log(this);
    }
}

 let myfunc = obj2.func();
 console.log(myfunc);     // POINTS WINDOW , BECAUSE OF REGULAR INVOCATION


console.log("-------------------------")

// QUESTION
let obj3 = {
    fn:function(){
        function calculate(){
            console.log(this)
        }
        calculate();
    }
}

obj3.fn();   // REGULAR CALLING

console.log("-------------------------")




// - CONSTRUCTOR INVOCATION

function CreateObj(){
    this.x = 20;
}

let newObj = new CreateObj;
console.log(newObj.x);  // IN CASE OF CONSTRUCTOR CALLING, MY THIS ALWAYS POINTS TO NEWLY CREATED OBJECT


console.log("-------------------------")


// - INDIRECT CALLING -> .call, .bind, .apply


// CALL

let obj4 = {
    a:20,
    fn:function(){
        console.log(this)
    }
}

let obj5 = {
    a: 50,
}

obj4.fn.call(obj5);  // from  this, now fn function call with the refrence of obj5 and now this will point obj5



console.log("-------------------------")

// BIND

let obj6 = {
    n:3,
    fn:function(){
        console.log(this);
    }
}

let myFuncs = obj6.fn.bind(obj6);  // context of this, ab chae m jase b call kru , this obj6 ko point karega   
myFuncs();






// - ARROW FUNCTION - next lecture



