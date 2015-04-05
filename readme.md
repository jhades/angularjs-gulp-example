# What every Angular project likely needs - and a Gulp build to provide it

This repository contains a baseline Gulp build for AngularJs development, applied to a sample test app. 

The build is as simple as possible (less than 100 lines excluding comments), but still includes all the features that an AngularJs project will most likelly need: 

* integration with bower - to ensure all the latest dependencies are present
* SASS (with source maps) - for building more maintainable stylesheets
* cache busting - to prevent cache problems in all environments, dev tools opened or closed, etc.
* template cache pre-population - to prevent that each template causes one extra HTTP request
* jshint - the de-facto Javascript code quality checker
* concatenation
* browserify integration - for using the CommonJs *require('module')* synchronous import syntax and avoid maintaining config files with dependencies
* Javascript source maps
* Angular-friendly minification
* sprite generation 
* a development web server with live reload, that re-loads the initial page of the project

A blog post concerning this build is available at [TODO](TODO)

