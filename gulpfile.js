
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var cheerio = require('gulp-cheerio');
var cleanhtml = require('gulp-cleanhtml');
var concat = require('gulp-concat');
var footer = require('gulp-footer');
var header = require('gulp-header');
var inject = require('gulp-inject');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');



gulp.task('compile-js', function() {
  gulp.src('src/js/geomicons.js')
    .pipe(browserify({ standalone: 'Geomicons' }))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('dist'));
});


gulp.task('sprite', function() {
  return gulp.src('./icons/*.svg')
    .pipe(concat('geomicons.svg'))
    .pipe(header('<svg xmlns="http://www.w3.org/2000/svg">'))
    .pipe(footer('</svg>'))
    .pipe(cleanhtml())
    .pipe(gulp.dest('./'));
});


gulp.task('defs', function() {
  var stream = gulp.src('./icons/*.svg')
    .pipe(cheerio(function($) {
      var $path = $('svg').children('path');
      var id = $('svg').attr('id');
      $path.attr('id', id);
      $('svg').replaceWith($path[0]);
    }))
    .pipe(concat('geomicons-defs.svg'))
    .pipe(header('<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0"><defs>'))
    .pipe(footer('</defs></svg>'))
    .pipe(cleanhtml())
    .pipe(gulp.dest('./'));
});



