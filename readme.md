Angular Gulp baseline build
=================

This repository contains a baseline Gulp build for AngularJs development, applied to a sample test app. 

The build is as simple as possible (less than 100 lines excluding comments), but still includes all the features that an AngularJs project will most likelly need: 

* integration with bower - to ensure all the latest dependencies are present
* Sass (with source maps) - for building more maintainable stylesheets. The plugin used uses libsass and does not introduce a dependency in the Ruby tool chain 
* unit testing / integration testing with Karma, Jasmine and PhantomJs
* cache busting - to prevent cache problems in all environments, dev tools opened or closed, etc.
* template cache pre-population - to prevent that each template causes one extra HTTP request
* jshint - the de-facto Javascript code quality checker
* concatenation
* browserify integration - for using the CommonJs *require('module')* synchronous import syntax and avoid maintaining config files with dependencies
* Javascript source maps
* Angular-friendly Javascript minification
* sprite generation 
* a development web server with live reload, that re-loads the initial page of the project

A blog post concerning this build is available [here](http://blog.jhades.org/what-every-angular-project-likely-needs-and-a-gulp-build-to-provide-it/)

# Installation instructions

First make sure Gulp is globally installed, by running:

    npm install -g gulp

After cloning the project, run the following commands:

    npm install
    gulp
    gulp dev
    
This will start the development server, the TODO sample app should be available at the following url:

[http://localhost:8000/dist/index.html](http://localhost:8000/dist/index.html)
    


