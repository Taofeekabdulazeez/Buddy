const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("./src/sass/main.scss").pipe(sass()).pipe(dest("./src/css"));
}

function watchTask() {
  watch(["main.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
