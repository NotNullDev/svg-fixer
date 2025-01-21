"use strict";

const Option = require("./option");
const Processor = require("./processor");

const SVGFixer = function (source, destination, options = {}) {
  if (!(this instanceof SVGFixer)) {
    return new SVGFixer(source, destination, options);
  }

  this.options = new Option(options);
  this.processor = new Processor(this);
  // this.location = new Location(this, source, destination);
  this.source = "this.location.source";
  this.destination = "this.location.destination";

  return this;
};

SVGFixer.prototype = {
  fix: function (callback) {
    return this.processor.start();
  },
};

module.exports = SVGFixer;
