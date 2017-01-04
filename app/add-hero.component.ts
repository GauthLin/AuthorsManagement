import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';


import { HeroService } from './hero.service';


@Component({
    moduleId: module.id,
    selector: 'add-hero',
    templateUrl: 'add-hero.component.html',
    styleUrls: ['hero-detail.component.css']
})


export class AddHeroComponent {
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    // Fonction appelé lorsque l'utilisateur clique sur le bouton "Ajouter l'auteur"
    addHero(firstname, lastname, email): void {
        this.heroService.create(firstname, lastname, email)
            .then(res => {
                // Si les données entrées comportent des erreurs, on les affiche
                if (res.length > 0) {
                    this.heroService.displayErrors(res);
                } else {
                    // Si aucune erreur, on revient à la page précédente
                    this.goBack();
                }
            });
    }

    // Fonction appelé lorsque l'utilisateur clique sur le bouton "Annuler"
    goBack(): void {
        this.location.back();
    }
}

