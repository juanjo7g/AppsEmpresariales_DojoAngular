import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero-service';

@Component({
	selector : 'my-hero-detail',
	template : 'app/hero-detail.component-html',
	styleUrls : ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
	@Input() hero: Hero;

	constructor(private _heroService: HeroService,
		private _routeParams: RouteParams){}

	ngInit(){
		let id = this._heroService().get("id");
		this._heroService.getHero(id).then(hero => this.hero = hero);
	}

	goBack(){
		windows.history.back();
	}
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/