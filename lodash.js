/*var express = require('express');
var app = express();
var port = 8888;

app.get('/', function (req, res, next) {
 res.sendFile( '/home/sravani/node.js/modb/myapp/libraries' + '/test.html');
});
app.listen(port, '0.0.0.0', function() {
 console.log('Server running at port ' + port);
});
*/

// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');

// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

// Fetch the name of the first pet from each owner
var ownerArr = [{
    "owner": "Colin",
    "pets": [{"name":"dog1"}, {"name": "dog2"}]
}, {
    "owner": "John",
    "pets": [{"name":"dog3"}, {"name": "dog4"}]
}];

// Array's map method.
ownerArr.map(function(owner){
   return owner.pets[0].name;
});

// Lodash
_.map(ownerArr, 'pets[0].name');