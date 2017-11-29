/*
 * grunt-google-cdnify
 * https://github.com/mhaligowski/grunt-google-cdnify
 *
 * Copyright (c) 2014 mhaligowski
 * Licensed under the BSD license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    copy: {
      tests: {
        files: [
          {expand: true, cwd: 'test/fixtures', src: '**/*.html', dest: 'tmp/'}
        ]
      }
    },

    cdnify: {
      integration: {
        html: [ 'tmp/integration/index.html' ],
        bower: 'test/fixtures/integration/bower.json'
      },
      multifile: {
        html: [ 'tmp/multifile/*.html' ],
        bower: 'test/fixtures/multifile/bower.json'
      }
    },

    nodeunit: {
      tests: ['test/**_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'copy', 'cdnify', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
