const { src, dest, parallel, watch } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

const browserSyncJob = () => {
  browserSync.init({
    server: "build/"
  });
  watch('app/scss/*.scss', buildSass);
  watch('app/pug_files/*.pug', buildPug);
};

const buildSass = () => {
  console.log('Компиляция SASS');

  return src('app/scss/*.scss')
    .pipe(sass({ sourceMap: false }))
    .pipe(concat('app.css'))
    .pipe(dest('build/'))
}

const buildPug = () => {
  console.log('Компиляция Pug');

  return src('app/pages/*.pug')
    .pipe(pug())
    .pipe(dest('build/'))
}

exports.server = browserSyncJob;
exports.default = parallel(buildSass, buildPug);