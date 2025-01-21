"use strict";

function background(options) {
  this.options.update("background", options); // fk hex

  options = this.options.get("background");

  this.output.background = options;

  return this;
}

module.exports = function (Svg2) {
  Object.assign(Svg2.prototype, {
    background: background,
  });
};
