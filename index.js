// core modules
// URL
const myURL = new URL('https://docs.microsoft.com/en-ca/');
console.log(myURL.hostname);
console.log(myURL.origin);
console.log(myURL.href);

//PATH
const path = require('path');
console.log(path.dirname(__filename));

