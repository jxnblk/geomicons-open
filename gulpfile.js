var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
  console.log('herro');
});

gulp.task('sprite', function() {
  //var stream = gulp.src('./partials/_sprite-head.svg', './icons/*.svg', './partials/_sprite-footer.svg')
  var stream = gulp.src(['./partials/_sprite-head.svg', './icons/*.svg', './partials/_sprite-footer.svg'])
    .pipe(concat('sprite.svg'))
    .pipe(gulp.dest('./sprite'));
});

