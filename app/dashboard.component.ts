import { Component, OnInit } from '@angular/core';

import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {Article} from "./article";
import {ArticleService} from "./article.service"

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit{
    heroes: Hero[] = [];
    articles: Article[] = [];
    
    constructor (
        private heroService: HeroService,
        private articleService: ArticleService
    ) {}

    deleteHero(hero: Hero): void {
        if (confirm('Êtes-vous sûr de vouloir supprimer '+ hero.firstname +' '+ hero.lastname.toUpperCase() +' de la liste des auteurs ?')) {
            this.heroService.del(hero);
            this.heroes.splice(this.heroes.indexOf(hero), 1);
        }
    }

    deleteArticle(article: Article): void {
        if (confirm("Êtes-vous sûr de vouloir supprimer l'article '"+ article.title +"' de la liste des articles ?")) {
            this.articleService.del(article);
            this.articles.splice(this.articles.indexOf(article), 1);
        }
    }

    ngOnInit():void {
        this.heroService.getHeroes()
          .then(heroes => this.heroes = heroes);

        this.articleService.getArticles()
            .then(articles => this.articles = articles);
    }
}