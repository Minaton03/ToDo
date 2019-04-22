const mix = require('laravel-mix');
mix.js([
  'resources/angular/dist/ToDo/runtime.js',
  'resources/angular/dist/ToDo/styles.js',
  'resources/angular/dist/ToDo/polyfills.js',
  'resources/angular/dist/ToDo/vendor.js',
  'resources/angular/dist/ToDo/main.js'
], 'public/js/app.js');
