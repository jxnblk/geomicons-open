var gulp = require('gulp');
var cheerio = require('gulp-cheerio');
var cleanhtml = require('gulp-cleanhtml');
var concat = require('gulp-concat');
var footer = require('gulp-footer');
var header = require('gulp-header');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', function() {
  console.log('herro!');
});

gulp.task('dev', function() {
  gulp.watch(['./icons/*.svg'], function(){
    gulp.run('sprite');
  });
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
    .pipe(cheerio({
      run: function($) {
        var $path = $('svg').children('path');
        var id = $('svg').attr('id');
        $path.attr('id', id);
        $('svg').replaceWith($path[0]);
        }
    }))
    .pipe(concat('geomicons-defs.svg'))
    .pipe(header('<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0"><defs>'))
    .pipe(footer('</defs></svg>'))
    .pipe(cleanhtml())
    .pipe(gulp.dest('./'));
});

gulp.task('minify-js', function() {
  return gulp.src('geomicons.js')
    .pipe(uglify())
    .pipe(rename('geomicons.min.js'))
    .pipe(gulp.dest('./'));
});

