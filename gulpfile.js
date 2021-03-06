const PORT = process.env.PORT || 1340;

const fs        = require('fs');
const pump      = require('pump');
const gulp      = require('gulp');
const gls       = require('gulp-live-server');
const sass      = require('gulp-sass');
const cleanCSS  = require('gulp-clean-css');
const uglify    = require('gulp-uglify');
const rename    = require('gulp-rename');
const replace   = require('gulp-replace');
const concat    = require('gulp-concat');
const newer     = require('gulp-newer');
const imagemin  = require('gulp-imagemin');
const prefixCSS = require('gulp-autoprefixer');
const htmlmin   = require('gulp-htmlmin');
const assetsVer = require('gulp-asset-version');
const _if       = require('gulp-if');
const minimist  = require('minimist');
const ico       = require('gulp-to-ico');

const folders = {
  src: './resources',
  dist: './public'
};

const FAVICON_PATH = folders.src + '/assets/images/tox-icon-colored.png';

var knownOptions = {
  string: 'env',
  default: { env: process.env.NODE_ENV || 'dev' }
};
var args = minimist(process.argv.slice(2), knownOptions);

gulp.task('sass', function () {
  gulp.src([
    folders.src + '/assets/sass/**.scss',
    folders.src + '/assets/sass/**/*.scss'
    ])
      .pipe(sass().on('error', sass.logError))
      .pipe(prefixCSS())
      .pipe(cleanCSS())
      .pipe(rename('dist.min.css'))
      .pipe(gulp.dest(folders.dist));

  gulp.src(folders.dist + '/dist.min.css')
      .pipe(assetsVer())
      .pipe(gulp.dest(folders.dist));
});

gulp.task('scripts', function () {
  try {
    return gulp.src(folders.src + '/assets/scripts/**.js')
        .pipe(concat('dist.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(folders.dist));
  } catch (e) {
    console.log(e);
  }
});

gulp.task('fonts', function () {
  return gulp.src(folders.src + '/assets/fonts/*')
      .pipe(gulp.dest(folders.dist + '/fonts/'));
});

gulp.task('res', function () {
  gulp.src(FAVICON_PATH)
      .pipe(ico(folders.dist + '/favicon.ico'));
  console.log('Generated favicon.ico');
  gulp.src(folders.src + '/manifest.json').pipe(gulp.dest(folders.dist));
});

gulp.task('images', function () {
  return gulp.src(folders.src + '/assets/images/**')
      .pipe(newer(folders.dist + '/images/'))
      .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 7}),
        imagemin.svgo({plugins: [{removeViewBox: true}]})
      ], {verbose: true}))
      .pipe(gulp.dest(folders.dist + '/images/'));
});

gulp.task('watch', function () {
  gulp.watch([folders.src + '/assets/sass/**.scss', folders.src + '/assets/sass/**/*.scss'], [ 'sass' ]);
  gulp.watch(folders.src + '/assets/fonts/**', [ 'fonts' ]);
  gulp.watch(folders.src + '/assets/images/**', [ 'images' ]);
  gulp.watch(folders.src + '/assets/scripts/**', [ 'scripts' ]);
});

gulp.task('serve', function () {
  var server = gls.static('dist', PORT);

  var files = [
    folders.src + '/assets/sass/**.scss',
    folders.src + '/assets/sass/**/*.scss',
    folders.src + '/assets/fonts/**.*',
    folders.src + '/assets/images/**.*',
    folders.src + '/assets/scripts/**.js',
  ];

  gulp.watch(files, function (file) {
    server.notify.apply(server, [file]);
  });

  server.start();
});

gulp.task('default', [ 'sass', 'scripts', 'fonts', 'res', 'images' ]);
