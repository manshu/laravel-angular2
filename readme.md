#This is Boilerplate for Angular 2 with Laravel 5.3
** Do not use the following information if you are going to clone the prject. ** 
1. First with new laravel 5.3 setup, there is a package.json file. Paste this code in this file.
```
{
  "name": "YourProjectName",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "prod": "gulp --production",
    "dev": "gulp watch",
    "start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\" ",
    "lite": "lite-server",
    "postinstall": "typings install",
    "tsc": "tsc",
    "tsc:w": "tsc -w",
    "typings": "typings"
  },
  "license": "ISC",
  "dependencies": {
    "@angular/common": "2.0.0",
    "@angular/compiler": "2.0.0",
    "@angular/core": "2.0.0",
    "@angular/forms": "2.0.0",
    "@angular/http": "2.0.0",
    "@angular/platform-browser": "2.0.0",
    "@angular/platform-browser-dynamic": "2.0.0",
    "@angular/router": "3.0.0",
    "@angular/upgrade": "2.0.0",
    "core-js": "^2.4.1",
    "reflect-metadata": "^0.1.3",
    "rxjs": "5.0.0-beta.12",
    "systemjs": "0.19.27",
    "zone.js": "^0.6.23",
    "angular2-in-memory-web-api": "0.0.20",
    "bootstrap": "^3.3.6"
  },
  "devDependencies": {
    "bootstrap-sass": "^3.3.7",
    "gulp": "^3.9.1",
    "jquery": "^3.1.0",
    "laravel-elixir": "^6.0.0-9",
    "laravel-elixir-vue": "^0.1.4",
    "laravel-elixir-webpack-official": "^1.0.2",
    "lodash": "^4.14.0",
    "vue": "^1.0.26",
    "vue-resource": "^0.9.3",
    "elixir-typescript": "2.0.0",

    "concurrently": "^2.2.0",
    "lite-server": "^2.2.2",
    "typescript": "^2.0.2",
    "typings":"^1.3.2"
  }
}
```
2. Create a file- tsconfig.json in your root directory.
```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  }
}
```

3. Create a file- typings.json in your root directory.

```
{
  "globalDependencies": {
    "core-js": "registry:dt/core-js#0.0.0+20160725163759",
    "jasmine": "registry:dt/jasmine#2.2.0+20160621224255",
    "node": "registry:dt/node#6.0.0+20160909174046"
  }
}
```

4. Write **npm install** command in your terminal

5. After install go- node_modules> elixer-typescript> index.js file and comment this line as shown in code

```
 //.pipe($.concat(paths.output.name))     
```
6. Create a folder in resources>assets>typescript and create three file- app.component.ts, app.module.ts, main.ts

##app.module.ts
```
///<reference path="../../../typings/index.d.ts"/>

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```
##app.component.ts
```
import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>My First Angular App</h1>'
})
export class AppComponent { }
```
##main.ts
```
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
```

7. Open gulpfile.js and paste this code.

```
const elixir = require('laravel-elixir');

require('laravel-elixir-vue');
require('elixir-typescript');


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('app.scss')
    .webpack('app.js')
    .copy('node_modules/@angular', 'public/@angular')
    .copy('node_modules/anular2-in-memory-web-api', 'public/anular2-in-memory-web-api')
    .copy('node_modules/core-js', 'public/core-js')
    .copy('node_modules/reflect-metadata', 'public/reflect-metadata')
    .copy('node_modules/systemjs', 'public/systemjs')
    .copy('node_modules/rxjs', 'public/rxjs')
    .copy('node_modules/zone.js', 'public/zone.js')

    .typescript(
        [
            'app.component.ts',
            'app.module.ts',
            'main.ts'
        ],
        'public/app',
        {
            "target": "es5",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        }
    );
})
;

```

8. Make a directory in public>app and write command in your terminal- 
    ##gulp && gulp watch
    
9. Create a file systemjs.config.js in your public directory.

```
/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({

        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'js/@angular/core/bundles/core.umd.js',
            '@angular/common': 'js/@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'js/@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'js/@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'js/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'js/@angular/http/bundles/http.umd.js',
            '@angular/router': 'js/@angular/router/bundles/router.umd.js',
            '@angular/forms': 'js/@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs':                       'js/rxjs',
            'angular2-in-memory-web-api': 'js/angular2-in-memory-web-api',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);

```

10 After that in your welcome.blade.php paste this code
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel 5.3 - Angular 2</title>

    <!-- 1. Load libraries -->
    <!-- Polyfill(s) for older browsers -->
    {{ Html::script('js/core-js/client/shim.min.js') }}
    {{ Html::script('js/zone.js/dist/zone.js') }}
    {{ Html::script('js/reflect-metadata/Reflect.js') }}
    {{ Html::script('js/systemjs/dist/system.src.js') }}
    {{ Html::script('systemjs.config.js') }}

    <script>
        System.import('app').catch(function(err){ console.error(err); });
    </script>
</head>
<!-- 3. Display the application -->
<body>
<my-app>Loading...</my-app>
</body>
</html>
```


## [Thanks to @eliyas5044 from laracasts.](https://laracasts.com/@eliyas5044)

