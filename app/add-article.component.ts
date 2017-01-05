import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';


import { HeroService } from './hero.service';
import {Hero} from "./hero";
import {ArticleService} from "./article.service";


@Component({
    moduleId: module.id,
    selector: 'add-article',
    templateUrl: 'add-article.component.html',
    styleUrls: ['hero-detail.component.css']
})


export class AddArticleComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private articleService: ArticleService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    
    authors: Hero[] = [];

    // Fonction appelé lorsque l'utilisateur clique sur le bouton "Ajouter l'article"
    addArticle(title, date, text, authors_selected): void {
        this.articleService.create(title, date, text, authors_selected.join());
    }

    // Fonction appelé lorsque l'utilisateur clique sur le bouton "Annuler"
    goBack(): void {
        this.location.back();
    }

    ngOnInit():void {
        this.heroService.getHeroes()
            .then(authors => this.authors = authors)
    }
}

