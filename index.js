// core modules
// URL
const myURL = new URL('https://docs.microsoft.com/en-ca/');
console.log(myURL.hostname);
console.log(myURL.origin);
console.log(myURL.href);

//PATH
const path = require('path');
const { default: isEmail } = require('validator/lib/isemail');
console.log(path.dirname(__filename));

//Validator

var validate = require('validator')
const mymail = "srinath@gmail.com";
console.log(validate.isEmail(mymail));