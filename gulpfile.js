var gulp        = require("gulp");
var less        = require("gulp-less");
var bower       = require("main-bower-files");
var concat      = require("gulp-concat");
var lessPath     = "./less/**/*.less";


gulp.task("less", function() {

  gulp.src(lessPath)

    .pipe(less())

    .pipe(gulp.dest("./css"));

});

gulp.task("bower:assets:js", function() { //adds important js files to new folder
  gulp.src(bower({filter: "**/*.js"}))               // no need to upload all to git, just the imp. ones
  .pipe(concat("vendor.js"))
  .pipe(gulp.dest("./vendor/js"));
});

gulp.task("watch", function() {
  gulp.watch(lessPath, ["less"]);
});