gulp.task('jshint', () => {
  gulp.src(config.js.src)
    .pipe($.jshint('.jshintrc'))
    .pipe($.jshint.reporter('jshint-stylish'));
});
