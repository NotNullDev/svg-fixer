"use strict";

const jimp = require("jimp");
const error = require("./error");
const constants = require("./constants");

const formats = constants.FORMATS;

function png(options = {}) {
  this.options.update("png", options);
  options = this.options.get("png");
  this.output.format = formats.png;
  return this;
}

function jpeg() {
  this.output.format = formats.jpeg;
  return this;
}

function tiff() {
  this.output.format = formats.tiff;
  return this;
}

function bmp() {
  this.output.format = formats.bmp;
  return this;
}

function _getDocument(input) {
  return window.document;
}

function toElement(input) {
  input = input ? input : this.svg.html();
  input = this.check(input);
  return _getDocument(input).getElementsByTagName("svg")[0];
}

function toUri(options = {}, callback) {
  this.options.update("uri", options);
  options = this.options.get("uri");
  var mime = options.mime;
  var base64 = options.base64;
  var svg = this.svg.html();
  var png = this.svg.png(svg);

  async function generateDataUri() {
    const buffer = await png;
    var image = await jimp.Jimp.read(buffer);
    var uri = await image.getBase64(mime);
    if (base64) {
      uri = uri.replace(new RegExp(`^data:${mime};base64,`), "");
    }
    return uri;
  }

  return generateDataUri();
}

function toBuffer(callback) {
  return this.processor.pipeline(callback);
}

function toFile(destination, callback) {
  return new Promise((resolve, reject) => {
    this.processor.pipeline((err, buffer) => {
      if (err) {
        reject(err);
        return;
      }

      // buffer

      console.log(`WOULD CALL WIRETE FILE:`);
      console.log(buffer);
    });
  });
}

module.exports = function (Svg2) {
  Object.assign(Svg2.prototype, {
    png: png,
    bmp: bmp,
    jpeg: jpeg,
    tiff: tiff,
    toUri: toUri,
    toFile: toFile,
    toBuffer: toBuffer,
    toElement: toElement,
  });
};
