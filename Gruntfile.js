/*jshint node: true*/

'use strict';

var path = require('path');

module.exports = function (grunt) {

    // Load all grunt tasks from node_modules, and config from /grunt/config
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/config'),
        config: {
            pkg: grunt.file.readJSON('package.json'),
            meta: {
                cwd: '',
                cwdAll: '**/*',

                source: 'src/',
                sourceAll: 'src/**/*',

                build: 'build/',
                buildAll: 'build/**/*',

                test: 'test/',
                testAll: 'test/**/*',

                npm: 'node_modules/',
                npmAll: 'node_modules/**/*'
            }
        }
    });
    
    

    // Will load the custom tasks
