var gulp          = require("gulp"),
    gutil         = require("gulp-util"),
    sass          = require("gulp-sass"),
    autoprefixer  = require("gulp-autoprefixer"),
    rename        = require("gulp-rename"),
    minifycss     = require("gulp-minify-css"),
    shell         = require("gulp-shell"),
    livereload    = require("gulp-livereload"),
    uglify        = require('gulp-uglifyjs'),
    lr            = require("tiny-lr"),
    server        = lr();

var paths = {
  'mainSass': '/css/main.scss',
  'destPath': '/_site/public/css',
  'jsPath' : 'public/js/*.js'
};

var concatOrder = [
  'public/js/jquery.js',
  'public/js/*.js'
]

gulp.task('sass', function() {
  return gulp.src(paths.mainSass)
            .pipe(sass())
            .pipe(autoprefixer('last 3 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
            .pipe(minifycss())
            .pipe(rename('main.min.css'))
            .pipe(gulp.dest('public/css'))
            .pipe(gulp.dest(paths.destPath))
            .pipe(livereload(server))
});


gulp.task('uglify', function() {
  gulp.src(concatOrder)
    .pipe(uglify())
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload(server))
});

gulp.task('build', shell.task( ['jekyll build'] ));

gulp.task('watch', function() {
  server.listen(35729, function(err) {
    if (err)
      return console.log(err);

    gulp.watch('_sass/**/*.scss', ['build', 'sass']);

    //gulp.watch('public/js/**/*.js', ['uglify'])

    gulp.watch([
      '_includes/**/*.html',
      '_layouts/**/*.html',
      '_works/**/*.html'
    ], ['build']);
  });
});

gulp.task('default', ['watch', 'build']);
