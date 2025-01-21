import SVGFixer from "./index.js";

console.log(`hello world`, SVGFixer);

(async () => {
  const res = await SVGFixer().fix();
  console.log(`result`, res);
})();
