import { Component, OnInit } from '@angular/core';

import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit{
    heroes: Hero[] = [];
    
    constructor (private heroService: HeroService) {}

    deleteHero(hero: Hero): void {
        if (confirm('Êtes-vous sûr de vouloir supprimer '+ hero.firstname +' '+ hero.lastname.toUpperCase() +' de la liste des auteurs ?')) {
            this.heroService.del(hero);
            this.heroes.splice(this.heroes.indexOf(hero), 1);
        }
    }

    ngOnInit():void {
        this.heroService.getHeroes()
          .then(heroes => this.heroes = heroes)
    }
}