"use strict";

const error = require("./error");
const constants = require("./constants");

const Option = function () {
  this.data = {
    main: { resolveWithObject: false },
    png: { transparent: false },
    uri: { base64: false, mime: constants.FORMATS.png },
    extend: { top: 0, right: 0, bottom: 0, left: 0, background: "#ffffff" },
    background: { color: "#ffffff" },
  };
};

Option.prototype = {
  get: function (setting) {
    if (!setting || typeof setting !== "string") {
      throw error.invalidParameterError("setting", "string", setting);
    }

    var expected = Object.keys(this.data);

    if (!expected.includes(setting)) {
      throw error.invalidParameterError(
        "setting",
        expected.toString(),
        setting
      );
    }

    return this.data[setting];
  },
  update: function (setting, options) {
    if (options == undefined) {
      throw error.invalidParameterError("options", "object", options);
    }

    if (Object.keys(options).length === 0) {
      return;
    }

    var preset = this.get(setting);

    for (var option in options) {
      if (preset[option] || preset[option] === false) {
        this.data[setting][option] = options[option];
      } else {
        var expected = Object.keys(preset);
        throw error.invalidParameterError(
          "png",
          `[${expected.toString()}]`,
          option
        );
      }
    }
  },
};

module.exports = Option;
