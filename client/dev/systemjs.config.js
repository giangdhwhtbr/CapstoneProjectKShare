/**
 * Created by GiangDH on 6/3/16.
 */
System.config({
  defaultJSExtensions: true,
  paths: {
    '@angular/*': 'node_modules/@angular/*',
    "rxjs/*": "node_modules/rxjs/*",
    "reflect-metadata": "node_modules/reflect-metadata",
    "angular2-jwt":"node_modules/angular2-jwt",
    "simple-peer/*":"node_modules/simple-peer"
  },
  map: {
    "rxjs": "node_modules/rxjs"
  },
  packages: {
    '@angular/common': {
      main: 'index'
    },
    '@angular/compiler': {
      main: 'index'
    },
    '@angular/core': {
      main: 'index'
    },
    '@angular/http': {
      main: 'index'
    },
    '@angular/platform-browser-dynamic': {
      main: 'index'
    },
    '@angular/platform-browser': {
      main: 'index'
    },
    '@angular/router': {
      main: 'index'
    },
    '@angular/router-deprecated': {
      main: 'index'
    },
    'angular2-jwt':{
      main: 'angular2-jwt'
    },
    "rxjs": {
      defaultExtension: 'js'
    },
    'dist': {
      defaultExtension: 'js',
      format: 'register'
    }
  }
});
