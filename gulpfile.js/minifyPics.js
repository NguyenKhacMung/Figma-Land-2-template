/* This task supposed to compress all pictures and images.
feel free to change the src/dest */

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const cache = require('gulp-cache');

module.exports = () => {
	return gulp
		.src('./src/assets/**/*.*')
		.pipe(plumber())
		.pipe(cache(imagemin({ verbose: true })))
		.pipe(gulp.dest('./dist/assets'));
};
