var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var concat = require('gulp-concat');
var header = require('gulp-header');
var footer = require('gulp-footer');
var cheerio = require('gulp-cheerio');

gulp.task('default', function() {
  console.log('herro');
});

gulp.task('sprite', function() {
  var stream = gulp.src(['./partials/_sprite-head.svg', './icons/*.svg', './partials/_sprite-footer.svg'])
    .pipe(concat('sprite.svg'))
    //.pipe(svgmin([{ cleanupIDs: false }]))
    .pipe(gulp.dest('./sprite'));
});

gulp.task('defs', function() {
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
    .pipe(header('<svg xmlns="http://www.w3.org/2000/svg"><defs>'))
    .pipe(footer('</defs></svg>'))
    // svgmin removes ids - need to disable this
    //.pipe(svgmin())
    .pipe(gulp.dest('./sprite'));
});

