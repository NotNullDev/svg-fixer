"use strict";

const { JimpMime } = require("jimp");

module.exports = {
  AUTO: "auto",
  FORMATS: {
    bmp: JimpMime.bmp,
    png: JimpMime.png,
    tiff: JimpMime.tiff,
    jpeg: JimpMime.jpeg,
  },
};
