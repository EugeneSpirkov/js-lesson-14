    var gulp = require('gulp'),
        gp_concat = require('gulp-concat'),
        gp_uglify = require('gulp-uglify');
        concatCss = require('gulp-concat-css');
        uglifycss = require('gulp-uglifycss');

    gulp.task('js', function(){
        return gulp.src('js/src/*.js')
            .pipe(gp_concat('main.min.script.js'))
            .pipe(gp_uglify())
            .pipe(gulp.dest('js/dist'));
    });


    gulp.task('css', function(){
        return gulp.src('css/src/*.css')
            .pipe(concatCss('main.min.style.css'))
            .pipe(uglifycss())
            .pipe(gulp.dest('css/dist'));
    });


    gulp.task('default', ['js', 'css'], function(){});