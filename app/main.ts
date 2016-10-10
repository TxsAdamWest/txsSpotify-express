//RC5 Import Method - Working.
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

// NOTE 1a
import {enableProdMode} from '@angular/core';
enableProdMode(); // This is supposed to allow app access to /node_modules folder.  Not working yet. 
// END 1a

platformBrowserDynamic().bootstrapModule(AppModule);


// Don't need RC4 anymore, keep commented for reference only.
//RC4 Import Method - will run currently but ngModel is still unavailable going the RC4 approach.

// import {bootstrap} from '@angular/platform-browser-dynamic'
// import {appRouterProviders} from './app.routes'
// import {AppComponent} from './app.component'
// import {disableDeprecatedForms, provideForms} from '@angular/forms'

// bootstrap(AppComponent, [
// 	appRouterProviders,
// 	disableDeprecatedForms(),
// 	provideForms()
// 	]);


