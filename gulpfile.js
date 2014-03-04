var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var concat = require('gulp-concat');
var header = require('gulp-header');
var footer = require('gulp-footer');
var cheerio = require('gulp-cheerio');
var minimist = require('minimist')(process.argv.slice(2));;

gulp.task('default', function() {
  console.log('herro');
});

gulp.task('image-sprite', function() {
  var fill = '';
  var filename = 'sprite';
  if(minimist.fill) {
    fill = minimist.fill;
    filename = filename + '-' + fill;
  }
  var stream = gulp.src('./icons/*.svg')
    .pipe(concat(filename + '.svg'))
    .pipe(cheerio({
      run: function($) {
        var y = 32;
        $('svg').each(function(){
          $(this)
            .attr('y', y)
            .attr('width', '32')
            .attr('height', '32');
          y += 32;
        });
      }
    }))
    .pipe(header('<svg xmlns="http://www.w3.org/2000/svg" fill="#' + fill + '">'))
    .pipe(footer('</svg>'))
    .pipe(gulp.dest('./sprite'));
});

gulp.task('js-sprite', function() {
  var stream = gulp.src('./icons/*.svg')
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

