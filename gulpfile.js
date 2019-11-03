var gulp = require("gulp"),
  autoprefixer = require("gulp-autoprefixer"),
  postcss = require("gulp-postcss"),
  cleanCSS = require("gulp-clean-css");

gulp.task("scr", function(done) {
  gulp
    .src("styles/style.scss")
    .pipe(autoprefixer({ grid: "autoplace" }))
    .pipe(gulp.dest("styles/"));
  done();
});
gulp.task("scripts", function() {
  return gulp
    .src("styles/style.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("pictures/"));
});
gulp.task("watch", function() {
  return (
    gulp.watch("./style/*.scss", ["saas"]), gulp.watch("./style/*.css", ["css"])
  );
});
