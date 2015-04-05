# AngularJS Gulp Baseline Build 

This repository contains a baseline Gulp build for AngularJs development, applied to a sample test app.  The goal of the build is to be a simple as possible but still include all the features that an AngularJs project will likelly need: 

* integration with bower - to ensure all the latest dependencies are present
* SASS (with source maps) - for building more maintainable stylesheets
* cache busting - via adding an hash to all css/js file names
* template cache pre-population - to prevent that each template causes one extra HTTP request
* jshint - the de-facto Javascript code quality checker
* concatenation
* browserify integration - for using the CommonJs *require('module')* synchronous import syntax and avoid maintaining config files with dependencies
* Angular-friendly minification
* sprite generation 
* a development web server with live reload, that loads the initial page of the project
