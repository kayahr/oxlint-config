import "node:fs";
import { readFile, writeFile } from "node:fs/promises";

import { test } from "./named-export.js";
import { a } from "./sort-imports/a.ts";
import { b } from "./sort-imports/b.ts";
import { type A, type B,type C, a as vA, b as vB, c as vC } from "./sort-imports/various.ts";
import { aTest } from "./sort-imports/a/test.ts";
import { bTest } from "./sort-imports/b/test.ts";

// These lines are just here so symbols are used
function foo(a: A, b: B, c: C) {
    return [ a, b, c ];
}
export const exports = { test, writeFile, readFile, a, b, vA, vB, vC, aTest, bTest, foo };
