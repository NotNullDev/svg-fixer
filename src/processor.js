"use strict";

const tracerFunc = require("./tracer");

const Processor = function (fixer) {
  this.fixer = fixer;
  this.progress = undefined;
  this.source = this.fixer.source;
  this.destination = this.fixer.destination;
};

Processor.prototype = {
  start: function (callback) {
    console.log(`haha`);
    return this.pipeline();
  },
  pipeline: function () {
    return new Promise(async (resolve, reject) => {
      try {
        var svgs = this.source ?? ["haha"]; // TODO: list of sources

        console.log(`svgs`, svgs);

        const resolution = this.fixer.options.get("traceResolution");

        svgs = svgs.map((source) => {
          const destination = "TODO: not used anyway";

          return { source, destination, resolution };
        });

        const workerPromises = svgs.map(async (svg) => {
          await tracerFunc(svg);
          // eslint-disable-next-line no-empty-function
          this.tick(() => {});
        });

        await Promise.all(workerPromises);

        this.teardown();
        resolve(this.fixer);
      } catch (err) {
        reject(err);
        this.teardown();
      }
    });
  },
  setup: function () {},
  tick: function (callback) {
    callback();
  },
  teardown: function () {},
};

module.exports = Processor;
