const gulp = require("gulp");
const ts = require("gulp-typescript");
const tslint = require("gulp-tslint");
const mocha = require("gulp-mocha");
const del = require("del");

const tsProject = ts.createProject("tsconfig.json");
const distDir = "dist";

gulp.task("lint", () => {
  return gulp.src("src/**/*.ts")
    .pipe(tslint({formatter: "verbose"}))
    .pipe(tslint.report({summarizeFailureOutput: true}));
});

gulp.task("build", () => {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest(distDir));
});

// TODO: "TS_NODE_FILES=true" should be passed to mocha when type augmentation
// is required
gulp.task("test", () => {
  return gulp.src("src/**/*.test.ts")
    .pipe(mocha({
      timeout: 1000,
      reporter: "list",
      require: ["ts-node/register"],
      exit: true,
    }))
});

gulp.task("watch", () => {
  gulp.watch("src/**/*.ts", gulp.series(["lint", "build", "test"]));
});

gulp.task("default", gulp.series("watch"));

gulp.task("clean", () => {
  return del(["dist"]);
});

