
var moment = require('moment-timezone');
var newYork    = moment.tz("2014-06-01 12:00", "America/New_York");
var losAngeles = newYork.clone().tz("America/Los_Angeles");
var london     = newYork.clone().tz("Europe/London");

console.log(newYork.format());
console.log(losAngeles.format());
console.log(london.format());

var jun = moment("2014-06-01T12:00:00Z");
var dec = moment("2014-12-01T12:00:00Z");

console.log(jun.tz('America/Los_Angeles').format('ha z'));  // 5am PDT
console.log(dec.tz('America/Los_Angeles').format('ha z'));  // 4am PST

console.log(jun.tz('America/New_York').format('ha z'));     // 8am EDT
console.log(dec.tz('America/New_York').format('ha z'));     // 7am EST

console.log(jun.tz('Asia/Tokyo').format('ha z'));           // 9pm JST
console.log(dec.tz('Asia/Tokyo').format('ha z'));           // 9pm JST

console.log(jun.tz('Australia/Sydney').format('ha z'));     // 10pm EST
console.log(dec.tz('Australia/Sydney').format('ha z'));     // 11pm EST