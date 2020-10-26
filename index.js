'use strict'

// const concat = require('concat-stream')
const through = require('through2')
const PluginError = require('plugin-error')
const fs = require('fs')

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

    try {
      // file.contents = Buffer.from(someModule(file.contents.toString(), options));
      // this.push(file);
      // console.log(file.base);

      // console.log(file.contents.toString())
      var html = file.contents.toString();
      var htmla;
      // const trimmedString = 'hola que tal333344';

      // html = html.replace('</partial>', 'mi partial aqui')


      // console.log(html);
      var partial_regex = "<\s*partial[^>]*>(.*?)<\s*/\s*partial>";
      var src_regex = /src\=([^\s]*)\s/;
      // var html_find = html.replace(partial_regex, '')
      // console.log(html.match(partial_regex));

      const array = [...html.matchAll(partial_regex)];
      // console.log(array)
      // console.log(html.matchAll(partial_regex));
      if (array.length != 0) {

        array.forEach(element => {
          var partial_element = element[0];
          var partial_content = element[1];
          var partial_src_content = partial_element.match(src_regex)[1].replace(/['"]+/g, '');
          // console.log(partial_element)
          // console.log(partial_content)
          // console.log(partial_src_content)

          // console.log(fs.existsSync('./footer.html'))
          var partial_file = file.base + '/' + partial_src_content;
          // console.log(partial_file)
          if (fs.existsSync(partial_file)) {
            console.log('EXISTS')
            var d;
            fs.readFileSync(partial_file, 'utf8', function (err, data) {
              // if (err) {
              //   return console.log(err);
              // // }
              // console.log(htmla)
              // console.log('ELEMENT: ' + partial_element);
              // console.log('HTML: ' + html);
              // console.log('CONTENT: ' + data);


              // const regex = /++/gi;
              // htmla = html.replace('<partial src="partials/footer.html" myParameter="myValue">My Content2</partial>', 'QUE')
 d = data;

            });

            var data  = fs.readFileSync(partial_file).toString();
            
            console.log(d);
            console.log(html);
            html = html.replace(partial_element, data)
            console.log(html);



          } else {
            console.log('The file does not exist.');
          }
          // try {
          //   if (fs.existsSync('./footer.html')) {
          //     //file exists
          //     console.log('not exists')
          //   }
          // } catch(err) {
          //   console.error(err)
          //   // console.log('exists')
          // }






        });


      }





      file.contents = Buffer.from(html);
      // file.contents = Buffer.from(trimmedString);
      // callback(null, file);




    } catch (error) {
      this.emit('error', new PluginError('gulp-html-elements', error));
    }

    callback(null, file);
    // callback();
  });
};


/**
 *
 * Functions
 */




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