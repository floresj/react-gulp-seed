var gulp = require('gulp');
var concat = require('gulp-concat');
var webpack = require('webpack-stream');
var sass = require('gulp-sass');


var paths =  {
    entry:      './src/App.js',
    dest:       './dist',
    sass:       ['./src/sass/**/*.scss'],
    sassDest:   './dist',
    cssFilename: 'app.css',
    webpathConfig: './webpack.config.js'
};


gulp.task('build', ['sass'], runBuild);
gulp.task('sass', runSass);
gulp.task('watchdog', ['build'], runWatchdog);
gulp.task('default', ['build']);


function runWatchdog () {
    return gulp.watch([
        paths.entry,
        paths.sass
    ], ['build', 'sass']);
}

function runBuild () {
    return gulp.src(paths.entry)
        .pipe(webpack(require(paths.webpathConfig)))
        .pipe(gulp.dest(paths.dest));
}

function runSass() {
    return gulp.src(paths.sass)
        .pipe(sass())
        .pipe(concat(paths.cssFilename))
        .pipe(gulp.dest(paths.sassDest));
}
