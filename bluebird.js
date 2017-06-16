var Promise = require('bluebird');

// EXAMPLE 1
// ERROR HANDLER WILL CATCH REJECTION
function getPromise1(){
    return new Promise(function(resolve, reject){
        reject(new Error("Rejected error"))
    }).then(function(result) {
        console.log('Result 1 ' + result);
        return result;
    }).then(function(result) {
    	  console.log('Result 2 ' + result)
      	return result;
    });
}
getPromise1()
.then(function(finalResult){console.log("Final result " + finalResult)})
.error(function(e){console.log("Error handler " + e)})
.catch(function(e){console.log("Catch handler " + e)});

// EXAMPLE 2
// CATCH HANDLER WILL CATCH REJECTION
function getPromise2(){
    return new Promise(function(resolve, reject){
        throw new Error("Throw error")
    }).then(function(result) {
        console.log('Result 1 ' + result);
        return result;
    }).then(function(result) {
    	  console.log('Result 2 ' + result)
      	return result;
    });
}
getPromise2()
.then(function(finalResult){console.log("Final result " + finalResult)})
.error(function(e){console.log("Error handler " + e)})
.catch(function(e){console.log("Catch handler " + e)});