'use strict'

// const concat = require('concat-stream')
const through = require('through2')
const PluginError = require('plugin-error')
// const extend = require('extend')
// const path = require('path')
module.exports = function (options) {
  return through.obj(function (file, encoding, callback) {
    if (file.isNull()) {
      callback(null, file);
      return;
    }

    if (file.isStream()) {
      callback(new PluginError('gulp-html-elements', 'Streaming not supported'));
      return;
    }

    // try {
    // file.contents = Buffer.from(someModule(file.contents.toString(), options));
    // this.push(file);



    const trimmedString = 'hola que tal3333';


    file.contents = Buffer.from(trimmedString);
    // callback(null, file);




    // } catch (error) {
    //   this.emit('error', new PluginError('gulp-html-elements', error));
    // }

    callback(null, file);
    // callback();
  });
};



// module.exports = function (opts) {
//   // if (typeof opts === 'string') {
//   //   opts = { prefix: opts }
//   // }

//   // opts = extend({}, {
//   //   basepath: '@file',
//   //   prefix: '@@',
//   //   suffix: '',
//   //   context: {},
//   //   filters: false,
//   //   indent: false
//   // }, opts)



//   function myPlugin(file, enc, callback) {
//     const trimmedString = 'hola que tal222';
//     file.contents = Buffer.from(trimmedString);
//     callback(null, file);
//   }

//   return through.obj(myPlugin)

// }