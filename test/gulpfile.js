/**
 * Dependencias
 */
const gulp = require('gulp');
const del = require('del');
const log = require('fancy-log');
const chalk = require('chalk');
const htmlPartial = require('gulp-html-partial');
const myPlugin = require('../index.js');

var src;


gulp.task('myPlugin', function () {
	return gulp.src(['src/*.html'])
		.pipe(myPlugin({
			// basePath: 'src/partials/'
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