import { suma, resta } from "librarytest";
import * as assert from "assert";

console.log("Test init");

assert(suma(1, 2) === 3);
assert(resta(1, 2) === -1);

console.log("Test passed");
