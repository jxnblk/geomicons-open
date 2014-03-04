var gulp = require('gulp');
//var svgmin = require('gulp-svgmin');
var concat = require('gulp-concat');

gulp.task('default', function() {
  console.log('herro');
});

gulp.task('sprite', function() {
  var stream = gulp.src(['./partials/_sprite-head.svg', './icons/*.svg', './partials/_sprite-footer.svg'])
    .pipe(concat('sprite.svg'))
    .pipe(gulp.dest('./sprite'));
});

gulp.task('defs', function() {
  var stream = gulp.src(['./partials/_defs-head.svg', './icons/*.svg', './partials/_defs-footer.svg'])
    .pipe(concat('defs.svg'))
    .pipe(gulp.dest('./sprite'));
});

