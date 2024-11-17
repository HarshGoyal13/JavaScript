


/*
Start Execution:
the code starts running, and the first statement console.log("Start") is added to the Call Stack and immediately executed. This prints "Start" to the console.
The Call Stack is now empty after this.

Calling setTimeout:
Next, the setTimeout function is called. This function is handled by the Web API (browser environment), not the Call Stack.
The Web API starts the 3-second timer in the background. The setTimeout function doesn’t block the rest of the code. It’s asynchronous, so it moves on to the next line.

Logging "end":
console.log("end") is executed next, which is synchronous. It gets added to the Call Stack and executed immediately, printing "end" to the console.
Now, the Call Stack is empty.

Waiting for Timer:
The setTimeout callback is now sitting in the Web API waiting for 3 seconds. After 3 seconds, the Web API pushes the callback (the function console.log("After 3 Seconds")) into the Callback Queue.

Event Loop:
The Event Loop constantly checks if the Call Stack is empty.
Once the Call Stack is empty (which happens after "end" is logged), the Event Loop moves the callback from the Callback Queue into the Call Stack.

Executing the Callback:
Now the callback (console.log("After 3 Seconds")) is in the Call Stack, and it is executed, printing "After 3 Seconds" to the console.

The sequence of events:

Call Stack:
console.log("Start") → executed
console.log("end") → executed

Web APIs:
setTimeout starts the timer in the background.

Callback Queue:
After 3 seconds, the callback (console.log("After 3 Seconds")) is moved here.

Event Loop:
When the Call Stack is empty, the event loop moves the callback from the Callback Queue to the Call Stack.

Call Stack:
console.log("After 3 Seconds") → executed.

*/


/*

WEB APIS 

> LOCATION
> LOCAL STORAGE
> SET TIMEOUT
> SET INTERVAL
> NULL
> CONSOLE

*/


console.log("Start");    // SYNCHRONUS CODE

setTimeout(function(){     // ASYNCRONUS CODE
    console.log("After 3 Seconds"); 
}, 3000);

console.log("end");

