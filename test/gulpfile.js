
/**
 * Dependencias
 */
const gulp = require('gulp');
const del = require('del');
const log = require('fancy-log');
const chalk = require('chalk');
// const through2 = require('through2');
const htmlElements = require('../index');




// function myPlugin(file, enc, callback) {
//   // const prettyString = pretty(file.contents.toString(), { ocd: true });
//   const trimmedString = 'hola que tal';
//   file.contents = Buffer.from(trimmedString);
//   callback(null, file);
// }


gulp.task('partials', function () {
	return gulp.src(['src/*.html'])
		// .pipe(htmlPartial({
		// 	basePath: 'src/partials/'
		// }))
		// .pipe(through2.obj(myPlugin))
		.pipe(htmlElements({
			test: 'hola'
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

gulp.task('default', gulp.series(['partials']));