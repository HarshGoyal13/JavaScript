




// PROMISE - TACKEL PROBLEMS OF CALLBACK hell




let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let data= 'hello';
        let err = "ERROR";
        resolve(data);
        reject(err);

    }, 3000);
})
promise.then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err);
})



