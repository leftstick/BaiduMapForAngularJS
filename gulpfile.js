var gulp = require('gulp');


gulp.task('lint', function() {
    var jshint = require('gulp-jshint');
    return gulp.src('./src/baiduMap.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('compress', ['lint', 'copyDist'], function() {
    var uglify = require('gulp-uglify');
    var rename = require('gulp-rename');
    var sourcemaps = require('gulp-sourcemaps');
    return gulp.src('./src/baiduMap.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./'));
});

gulp.task('copyDist', ['lint'], function() {
    return gulp.src('./src/baiduMap.js')
        .pipe(gulp.dest('./'));
});

gulp.task('copyDemo', function() {
    return gulp.src([
        './bower_components/angular/angular.js',
        './src/baiduMap.js'
    ])
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