'use strict';

var gulp = require('gulp');

gulp.task('compress', ['copyDist'], function() {
    var uglify = require('gulp-uglify');
    var rename = require('gulp-rename');
    return gulp.src('./src/baiduMap.js')
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('./'));
});

gulp.task('copyDist', [], function() {
    return gulp.src('./src/baiduMap.js')
        .pipe(gulp.dest('./'));
});

gulp.task('copyDemo', function() {
    return gulp.src(['./src/baiduMap.js'])
        .pipe(gulp.dest('./demo/libs/'));
});

gulp.task('demo', ['copyDemo'], function(cons) {
    var webserver = require('gulp-webserver');

    gulp.src('./demo/')
        .pipe(webserver({
            host: '0.0.0.0',
            port: 8080,
            livereload: true,
            directoryListing: false,
            open: false
        }));

    cons();
});
