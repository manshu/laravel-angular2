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
