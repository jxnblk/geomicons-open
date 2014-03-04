var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var concat = require('gulp-concat');
var cheerio = require('gulp-cheerio');

gulp.task('default', function() {
  console.log('herro');
});

gulp.task('sprite', function() {
  var stream = gulp.src(['./partials/_sprite-head.svg', './icons/*.svg', './partials/_sprite-footer.svg'])
    .pipe(concat('sprite.svg'))
    .pipe(svgmin([{ cleanupIDs: false }]))
    .pipe(gulp.dest('./sprite'));
});

gulp.task('defs', function() {
  //var stream = gulp.src(['./partials/_defs-head.svg', './icons/*.svg', './partials/_defs-footer.svg'])
  var stream = gulp.src('./icons/*.svg')
    .pipe(cheerio({
      run: function ($) {
          $('svg').each(function(){
            var $paths = $(this).children('path');
            var id = $(this).attr('id');
            $paths.attr('id', id);
          });
        }
    }))
    .pipe(concat('defs.svg'))
    .pipe(gulp.dest('./sprite'));
});

