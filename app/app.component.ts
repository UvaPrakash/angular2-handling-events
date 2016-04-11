import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
    	<!--Property Binding -->
    	<h1>{{ title }}</h1>
		<img src="{{ imageUrl }}" />

		<!-- Class Binding -->
		<button class="btn btn-primary" [class.active]="isActive">Class</button>

		<!-- Style Binding -->
		<button class="btn btn-primary" [style.backgroundColor]="!isActive ? 'blue' : 'gray'">Style</button>

		<!-- Event Binding -->
		<button class="btn btn-primary" (click)="onClick($event)">Event</button>
		
		<br/><br/>

		<!-- Two-way Binding -->
		<input type="text" [(ngModel)]="title"/>
		<input type="button" (click)="title = '' " value="Clear" class="btn btn-primary"/>
		<br/>
		<!-- Star -->
		<i 
			class="glyphicon" 
			[class.glyphicon-star-empty]="!isFavorite"
			[class.glyphicon-star]="isFavorite"	
			(click)="onStarClick()"
			style="font-size:50;"></i>
    `
})
export class AppComponent { 
	title = "Angular App";
	imageUrl = "http://lorempixel.com/400/200/";

	isActive = true;
	isFavorite = false;

	onClick($event) {
		$event.stopPropagation(); //Stop Event Bubbling
		console.log("Clicked", $event);
	}

	onStarClick() {
		this.isFavorite = !this.isFavorite;
	}
}
