var gulp = require('gulp');
var cheerio = require('gulp-cheerio');
var concat = require('gulp-concat');
var footer = require('gulp-footer');
var header = require('gulp-header');
var watch = require('gulp-watch');

gulp.task('default', function() {
  console.log('herro!');
});

gulp.task('dev', function() {
  gulp.watch(['./icons/*.svg'], function(){
    gulp.run('js-sprite');
  });
});

gulp.task('js-sprite', function() {
  return gulp.src('./icons/*.svg')
    .pipe(concat('js-sprite.svg'))
    .pipe(header('<svg xmlns="http://www.w3.org/2000/svg">'))
    .pipe(footer('</svg>'))
    .pipe(gulp.dest('./sprite'));
});

gulp.task('defs', function() {
  var stream = gulp.src('./icons/*.svg')
    .pipe(cheerio({
      run: function($) {
        var $path = $('svg').children('path');
        var id = $('svg').attr('id');
        $path.attr('id', id);
        $('svg').replaceWith($path[0]);
        }
    }))
    .pipe(concat('defs.svg'))
    .pipe(header('<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0"><defs>'))
    .pipe(footer('</defs></svg>'))
    .pipe(gulp.dest('./sprite'));
});

