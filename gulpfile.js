
var gulp = require('gulp');
var cheerio = require('gulp-cheerio');
var cleanhtml = require('gulp-cleanhtml');
var concat = require('gulp-concat');
var footer = require('gulp-footer');
var header = require('gulp-header');
var inject = require('gulp-inject');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');

var fs = require('fs');
var exec = require('child_process').exec;

gulp.task('default', ['sprite', 'defs', 'minify-js'], function() {
  console.log('herro!');
});

gulp.task('dev', ['default', 'jekyll', 'serve'], function() {
  gulp.watch(['./src/**/*', './**/*.html', '!./_site/**/*', '!./node_modules/**/*'], ['default', 'jekyll', 'serve']);
});

gulp.task('paths', function() {
  var paths = require('./gulp/paths');
  gulp.src('./src/paths/*.d')
    .pipe(paths())
    .pipe(gulp.dest('./src/js'));
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

gulp.task('minify-js', function() {
  return gulp.src('geomicons.js')
    .pipe(uglify())
    .pipe(rename('geomicons.min.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('jekyll', function() {
  exec('jekyll build --config _config.yml,_config_dev.yml', function(err, stdout, stderr) {
    console.log(err, stdout, stderr);
  });
});

gulp.task('serve', function() {
  gulp.src('./_site')
    .pipe(webserver());
});

