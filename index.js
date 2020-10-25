'use strict'

// const concat = require('concat-stream')
const through = require('through2')
// const PluginError = require('plugin-error')
// const extend = require('extend')
// const path = require('path')

module.exports = function (opts) {
  // if (typeof opts === 'string') {
  //   opts = { prefix: opts }
  // }

  // opts = extend({}, {
  //   basepath: '@file',
  //   prefix: '@@',
  //   suffix: '',
  //   context: {},
  //   filters: false,
  //   indent: false
  // }, opts)



  function myPlugin(file, enc, callback) {
    const trimmedString = 'hola que tal222';
    file.contents = Buffer.from(trimmedString);
    callback(null, file);
  }

  return through.obj(myPlugin)

}