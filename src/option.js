"use strict";

const error = require("./error");

const Option = function (options) {
  this.data = {
    showProgressBar: false,
    throwIfDestinationDoesNotExist: true,
    traceResolution: 600,
  };

  this.update(options);
};

Option.prototype = {
  all: function () {
    return this.data;
  },
  get: function (option) {
    var options = Object.keys(this.data);
    if (!options.includes(option)) {
      throw error.invalidParameterError(
        "setting",
        `one of ${options.toString()}`,
        option
      );
    }

    return this.data[option];
  },
  update: function (options) {
    for (var key in options) {
      if (Object.prototype.hasOwnProperty.call(this.data, key)) {
        this.data[key] = options[key];
      }
    }
  },
};

module.exports = Option;
