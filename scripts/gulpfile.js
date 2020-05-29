const path = require("path");
const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const size = require("gulp-filesize");
const concat = require("gulp-concat");
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");

const { name,browserList } = require("../package.json");

const DIR = {
    scss: path.resolve(__dirname, "../src/components/**/*.scss"),
    buildSrc: [
        path.resolve(__dirname, "../src/components/**/style.scss"),
        path.resolve(__dirname, "../src/components/**/index.scss"),
    ],
    es: path.resolve(__dirname, "../es"),
    lib: path.resolve(__dirname, "../lib"),
    dist: path.resolve(__dirname, "../dist"),
    esMap: [path.resolve(__dirname, "../es/**/*.js"),
        path.resolve(__dirname, "../lib/**/*.js")]
};

gulp.task("copyScss", () => {
    return gulp
        .src(DIR.scss)
        .pipe(gulp.dest(DIR.es))
        .pipe(gulp.dest(DIR.lib))
});

sass.compiler = require('node-sass');

gulp.task("copyCss", () => {
    return gulp
        .src(DIR.buildSrc)
        .pipe(sourcemaps.init())
        .pipe(
            sass({outputStyle: 'compressed'}).on('error', sass.logError)
        )
        .pipe(autoprefixer({ browsers: browserList }))
        .pipe(size())
        .pipe(cssnano())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(DIR.es))
        .pipe(gulp.dest(DIR.lib))
});

gulp.task("dist", () => {
    return gulp
        .src(DIR.buildSrc)
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                outputStyle: "compressed"
            })
        )
        .pipe(autoprefixer({ browsers: browserList }))
        .pipe(concat(`${name}.css`))
        .pipe(size())
        .pipe(gulp.dest(DIR.dist))
        .pipe(sourcemaps.write())
        .pipe(rename(`${name}.css.map`))
        .pipe(size())
        .pipe(gulp.dest(DIR.dist))

        .pipe(cssnano())
        .pipe(concat(`${name}.min.css`))
        .pipe(size())
        .pipe(gulp.dest(DIR.dist))
        .pipe(sourcemaps.write())
        .pipe(rename(`${name}.min.css.map`))
        .pipe(size())
        .pipe(gulp.dest(DIR.dist));
});
gulp.task("default", gulp.series(["copyScss","copyCss", "dist"]));