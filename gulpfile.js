let gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    imagemin = require("gulp-imagemin"),
    webp = require('gulp-webp'),
    //webp = require("imagemin-webp"),
    extReplace = require("gulp-ext-replace"),
    autoprefixer = require('gulp-autoprefixer'),
    srcset = require('gulp-srcset').default,
    cache = require('gulp-cache');

gulp.task('sass', function(){
    return gulp.src([
        'app/scss/main.scss'
    ], {allowEmpty: true})
    .pipe(concat('styles.main.css'))
    .pipe(autoprefixer({cascade: false}))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest('./css'))
});

gulp.task('js', function(){
    return gulp.src([
        'app/js/jquery-3.4.1.js',
        'app/js/webfontloader-1.6.28.js',
        'app/js/jquery.maskedinput-1.4.1.js',
        'app/js/jquery.modal-0.9.2.js',
        'app/js/lazysizes-5.2.0.js',
        'app/js/jquery.bootstrap-responsive-tabs.js',
        'app/js/custom.js'
    ], {allowEmpty: true})
    .pipe(concat('scripts.main.js'))
    .pipe(minify({
        ext:{
            src:'.min.js',
        },
        __compress: true,
    }))
    .pipe(gulp.dest('./js'))
})

gulp.task('webp', function () {
    return gulp
    .src([
        'img/**/*.jpg',
        'img/**/*.png'
    ])
    .pipe(webp())
    .pipe(gulp.dest('./img'))
});

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'))
    gulp.watch('app/js/**/*.js', gulp.parallel('js'))
    gulp.watch('*.html', gulp.parallel('default'))
})

gulp.task('default', gulp.parallel('sass', 'js', 'webp'))