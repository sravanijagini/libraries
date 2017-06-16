async = require("async");
 
// Array to hold async tasks
var asyncTasks = [];
 
// Loop through some items
items.forEach(function(item){
  // We don't actually execute the async action here
  // We add a function containing it to an array of "tasks"
  asyncTasks.push(function(callback){
    // Call an async function, often a save() to DB
    item.someAsyncCall(function(){
      // Async call is done, alert via callback
      callback();
    });
  });
});
 
// At this point, nothing has been executed.
// We just pushed all the async tasks into an array.
 
// To move beyond the iteration example, let's add
// another (different) async task for proof of concept
asyncTasks.push(function(callback){
  // Set a timeout for 3 seconds
  setTimeout(function(){
    // It's been 3 seconds, alert via callback
    callback();
  }, 3000);
});
 
// Now we have an array of functions doing async tasks
// Execute all async tasks in the asyncTasks array
async.parallel(asyncTasks, function(){
  // All tasks are done now
  doSomethingOnceAllAreDone();
});