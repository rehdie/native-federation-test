import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { NgModule } from '@angular/core';
import { StackComponent } from './stack.component';


@NgModule({
	declarations: [
		StackComponent		
	],
	exports: [
		StackComponent
	]
})
export class TestLibrary {
	constructor() {
		registerLocaleData(localeDe, 'de', localeDeExtra);
	}
}

// Typescript exports
export { StackComponent };

