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

elixir(function(mix){
    mix.sass('app.scss')
    .webpack('app.js')
    .copy('node_modules/@angular', 'public/js/@angular')
    .copy('node_modules/anular2-in-memory-web-api', 'public/js/anular2-in-memory-web-api')
    .copy('node_modules/core-js', 'public/js/core-js')
    .copy('node_modules/reflect-metadata', 'public/js/reflect-metadata')
    .copy('node_modules/systemjs', 'public/js/systemjs')
    .copy('node_modules/rxjs', 'public/js/rxjs')
    .copy('node_modules/zone.js', 'public/js/zone.js')

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
});