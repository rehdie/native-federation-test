import { Component, HostBinding, Input } from "@angular/core";

@Component({
	selector: 'lib-stack',
	template: `
		<ng-content/>
	`,
	styles: [`
		:host { 
			display: flex;
			flex-direction: column;
		}
	`]
})
export class StackComponent {

	@Input()
	@HostBinding("style.gap.px")
	gap = 10;

	@Input()
	@HostBinding("style.justify-content")
	justify: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" = "flex-start";

	@Input()
	@HostBinding("style.align-items")
	align: "flex-start" | "flex-end" | "center" | "stretch" | "base-line" = "stretch";
}