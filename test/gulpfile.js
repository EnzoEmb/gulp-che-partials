/**
 * Dependencias
 */
const gulp = require('gulp');
const del = require('del');
const log = require('fancy-log');
const chalk = require('chalk');
const htmlPartial = require('gulp-html-partial');

var src;


gulp.task('html:partials', function () {
	return gulp.src(['src/*.html'])
		.pipe(htmlPartial({
			basePath: 'src/partials/'
		}))
		.pipe(gulp.dest('build'));
});



/**
 * Cleaning
 */
gulp.task('clean:build', function clean_build() {

	log(chalk.white.bgRedBright.bold('Eliminado BUILD'));
	return del([
		'build/',
	]);
});


gulp.task('default', gulp.series(['dev']));