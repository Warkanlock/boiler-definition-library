var operations = require("./index.js");
var assert = require("assert");

console.log("Test init");
assert(operations.suma(1, 2) === 3);
assert(operations.resta(1, 2) === -1);
console.log("Test passed");
