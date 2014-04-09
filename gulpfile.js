var gulp = require('gulp');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');


gulp.task('lint', function() {
    return gulp.src('./src/baiduMap.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('compress', ['lint'], function() {
    return gulp.src('./src/baiduMap.js')
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('copyDist', ['lint'], function() {
    return gulp.src('./src/baiduMap.js')
        .pipe(gulp.dest('./'));
});

gulp.task('copyDemo', function() {
    return gulp.src(['./bower_components/angular/angular.js', './src/baiduMap.js'])
        .pipe(gulp.dest('./demo/libs/'));
});

gulp.task('demo', ['copyDemo'], function() {
    var conn = connect.server({
        root: ['demo/'],
        port: 9898,
        livereload: true
    });
});


gulp.task('default', ['compress', 'copyDist'], function() {

});
