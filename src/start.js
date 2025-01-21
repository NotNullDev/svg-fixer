"use strict";

const SVGFixer = require("..");

const res = await new SVGFixer("input", "output", {}).fix();
// console.log(`after`, res);
