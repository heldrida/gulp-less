/**
 * gulp
 * $ npm install gulp gulp-livereload gulp-watch gulp-less gulp-concat gulp-plumber --save-dev
 *
 * Author: Helder C. <helder.correia@mrm-meteorite.com>
 *
 */

var myPaths = {
      root: '.'
    },
    // Load plugins
    gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    path = require('path');

// Less
gulp.task('less', function() {
    return  gulp.src(myPaths.root + '/less/**/*.less')
            .pipe(plumber())
            .pipe(less())
            .pipe(gulp.dest(myPaths.root + '/css'));
});

// Scripts
gulp.task('scripts', function () {
    return gulp.src(myPaths.root + '/js/scripts.js')
           .pipe(gulp.dest(myPaths.root + '/js'));
});

// Watch
gulp.task('watch', function () {

    // Watch `html`
    gulp.watch(['*.html', 'css/*.css', 'js/*.js']).on('change', livereload.changed);

    // Watch `scripts`
    gulp.watch(myPaths.root + '/js/scripts.js', ['scripts']);

    // Watch `less` files
    gulp.watch(myPaths.root + '/less/**/*.less', ['less']);

    // Create liveReload server
    livereload.listen();

});