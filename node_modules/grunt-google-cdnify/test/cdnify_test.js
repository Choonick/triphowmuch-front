'use strict';

var grunt = require('grunt');

exports.cdnify = {
    setUp: function(done) {
        done();
    },
    integration: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/integration/index.html');
        var expected = grunt.file.read('test/expected/integration/index.html');

        test.equal(actual, expected, 'should make the test from google-cdn site');

        test.done();
    },
    multifile: function(test) {
        test.expect(2);

        var actual, expected;

        actual = grunt.file.read('tmp/multifile/index001.html');
        expected = grunt.file.read('test/expected/multifile/index001.html');

        test.equal(actual, expected);

        actual = grunt.file.read('tmp/multifile/index002.html');
        expected = grunt.file.read('test/expected/multifile/index002.html');

        test.equal(actual, expected);

        test.done();
    },
};