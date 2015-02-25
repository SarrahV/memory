var gulp        = require("gulp");
var less        = require("gulp-less");

var lessPath     = "./less/**/*.less";


gulp.task("less", function() {

  gulp.src(lessPath)

    .pipe(less())

    .pipe(gulp.dest("./css"));

})

gulp.task("watch", function() {
  gulp.watch(lessPath, ["less"]);
});