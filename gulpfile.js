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
        var $path = $('svg').children('path');
        var id = $('svg').attr('id');
        $path.attr('id', id);
        $('svg').replaceWith($path);
        }
    }))
    .pipe(concat('defs.svg'))
    .pipe(gulp.dest('./sprite'));
});

