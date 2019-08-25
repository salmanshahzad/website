const gulp = require("gulp");
const htmlMin = require("gulp-htmlmin");
const minifyCss = require("gulp-clean-css");
const terser = require("gulp-terser");
const resizer = require("gulp-images-resizer");
const imageMin = require("gulp-imagemin");

function html() {
    return gulp.src("src/*.html").pipe(htmlMin({
        collapseWhitespace: true,
        removeComments: true
    })).pipe(gulp.dest("dist"));
}

function css() {
    return gulp.src("src/*.css").pipe(minifyCss()).pipe(gulp.dest("dist"));
}

function js() {
    return gulp.src("src/*.js").pipe(terser()).pipe(gulp.dest("dist"));
}

function notBackgroundImg() {
    return gulp.src(["src/images/*", "!src/images/background.jpg"]).pipe(resizer({
        width: "30%"
    })).pipe(imageMin()).pipe(gulp.dest("dist/images"));
}

function backgroundImg() {
    return gulp.src("src/images/background.jpg").pipe(imageMin()).pipe(gulp.dest("dist/images"));
}

function watch() {
    gulp.watch("src/*.html", {ignoreInitial: false}, html);
    gulp.watch("src/*.css", {ignoreInitial: false}, css);
    gulp.watch("src/*.js", {ignoreInitial: false}, js);
    gulp.watch("src/images/*", {ignoreInitial: false}, gulp.parallel(notBackgroundImg, backgroundImg));
}

exports.default = watch;
