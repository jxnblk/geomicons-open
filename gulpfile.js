
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
var browserSync = require('browser-sync');
var fs = require('fs');
var basswork = require('gulp-basswork');
var mincss = require('gulp-minify-css');
var pygmentize = require('./gulp/pygmentize');

gulp.task('default', ['sprite', 'defs'], function() {
  console.log('herro!');
});


gulp.task('dev', ['default', 'compile-js', 'css', 'html', 'serve'], function() {
  gulp.watch(
    ['./src/**/*', './docs/dev/*.html', './docs/assets/index.css', './docs/index.html', '!./node_modules/**/*'],
    ['default', 'compile-js', 'css', 'html', 'reload']
  );
});


gulp.task('paths', function() {
  var paths = require('./gulp/paths');
  gulp.src('./src/paths/*.d')
    .pipe(paths())
    .pipe(gulp.dest('./src/js'));
});


gulp.task('compile-svg', function() {
  var dsvg = require('./gulp/dsvg');
  gulp.src('./src/paths/*.d')
    .pipe(dsvg())
    .pipe(gulp.dest('./icons'));
});


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


gulp.task('css', function() {
  gulp.src('./docs/assets/index.css')
    .pipe(basswork())
    .pipe(mincss())
    .pipe(rename('base.min.css'))
    .pipe(gulp.dest('./docs/assets'));
});

gulp.task('html', function() {
  gulp.src('./docs/index.html')
    .pipe(pygmentize())
    .pipe(gulp.dest('./'));
});

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('serve', function() {
  browserSync({ server: { baseDir: './' } , open: false, ghostMode: false });
});


