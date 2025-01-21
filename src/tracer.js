"use strict";

const Svg = require("./svg");

module.exports = async ({ source, destination, resolution }) => {
  const svg = new Svg(source, resolution);
  const fixed = await svg.process();

  console.log(`fixed svg`);
  console.log(`------`);
  console.log(fixed);

  // TODO: output
  // fs.writeFile(destination, fixed);

  // await fs.writeFile(destination, fixed);
};
