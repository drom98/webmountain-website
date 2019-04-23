const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('public'));
});

gulp.task('concatJS', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

gulp.task('babel', function() {
  return gulp.src('src/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

gulp.task('minify', function() {
  gulp.src('public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

gulp.task('sass', function() {
  return gulp.src('src/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});


gulp.task('build', gulp.series(['html', 'sass', 'babel']));

gulp.task('watch', function() {
  gulp.watch('src/*.html', gulp.series('html'));
  gulp.watch('src/js/*.js', gulp.parallel('babel'));
  gulp.watch('src/scss/*.scss', gulp.parallel('sass'));
});
