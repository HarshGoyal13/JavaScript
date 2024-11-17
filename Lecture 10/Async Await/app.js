




// IT ALWAYS  RETURNS A PROMISE
// ASYNC FUNCTION ALWAYS WORK WITH AWAIT


/*
async/await simplifies handling asynchronous code by making it look synchronous. 
Use async to define an asynchronous function and await to pause execution until 
a Promise resolves, avoiding .then() chains and improving readability.
*/


async function func1() {
    await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("After 3 Seconds");
            resolve();
        }, 3000);
    })
    await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("After 2 Seconds");
            resolve();
        }, 2000);
    })

    console.log("Both done")
}

func1();







