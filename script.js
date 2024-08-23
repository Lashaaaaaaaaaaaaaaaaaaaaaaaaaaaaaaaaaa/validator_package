const { default: isEmail } = require("validator/lib/isEmail");

console.log(isEmail('test@test.com'))  // true
console.log(isEmail('abcDE123'))       // false