"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const librarytest_1 = require("librarytest");
const assert = require("assert");
console.log("Test init");
assert(librarytest_1.suma(1, 2) === 3);
assert(librarytest_1.resta(1, 2) === -1);
console.log("Test passed");
