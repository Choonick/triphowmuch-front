/*
 * grunt-google-cdnify
 * https://github.com/mhaligowski/grunt-google-cdnify
 *
 * Copyright (c) 2014 mhaligowski
 * Licensed under the MIT license.
 */

'use strict';
var fs = require('fs');
var path = require('path');
var async = require('async');

var googlecdn = require('google-cdn');

module.exports = function(grunt) {

  grunt.registerMultiTask('cdnify', 'Grunt task for substituting JS libraries with CDN versions', function() {
    var done = this.async();

    var bowerPath = path.resolve(this.data.bower);
    var bowerConfig = grunt.file.readJSON(bowerPath);

    var options = this.options({
        cdn: require('google-cdn-data'),
        components_path: 'bower_components'
    });

    var files = grunt.file.expand(this.data.html);

    async.each(
        files, 
        function(filename, callback) {
            grunt.log.writeln("... handling file: " + filename);

            var markup = grunt.file.read(filename);
            googlecdn(markup, bowerConfig, options, function(err, result) {
                if (err) { 
                    grunt.log.error(err);
                    throw err; 
                }
                    
                grunt.file.write(filename, result);
                grunt.log.ok();
                callback();
            });
        },
        function(err) {
            done();
        });
    });
};
