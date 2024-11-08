





// A FUNCTION BUMDELED TOGETHER WITH REFRENCE TO ITS SOURROUNDING STATE OR LEXICAL ENVIRONMENT IS CALLED CLOUSER.

function func(){
    let username = 'harsh';
    function printName(){
        console.log(username);
    }
    return printName ;
}

let newfunc = func();
newfunc();




// REAL WORLD IMPLEMENTATION

function ClickHandler(color){
    
      return function(){
         document.body.style.backgroundColor = `${color}`;
       }
    
}

document.getElementById('orange').onclick = ClickHandler("orange");
document.getElementById('green').onclick = ClickHandler("green");





