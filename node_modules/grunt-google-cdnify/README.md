# grunt-google-cdnify

> Grunt task for substituting JS libraries with CDN versions

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-google-cdnify --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-google-cdnify');
```

## The "cdnify" task

### Overview
In your project's Gruntfile, add a section named `cdnify` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cdnify: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.cdn
Type: `Object`
Default value: `require('google-cdn-data')`

Object containing the CDN addresses. Refer to [`google-cdn-data`](https://github.com/shahata/google-cdn-data) for reference.

#### options.components_path
Type: `String`
Default value: `'bower_components'`

A string value that is used to substituting the address.

### Usage Examples

#### Default Options
In this example, the default options are used. It subtitutes the bower dependencies with the CDN ones, according to the Google CDN.

```js
grunt.initConfig({
  cdnify: {
    dist: {
      html: ['<%= dist %>/*.html'],
      bower: 'bower.json'
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
 * 2014-02-26    v0.1.1    Fixed issue with multiple files
 * 2014-02-25    v0.1.0    Initial release
