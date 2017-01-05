// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';


import { ArticleService } from './article.service';
import {Article} from "./article";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";


@Component({
    moduleId: module.id,
    selector: 'my-article-detail',
    templateUrl: 'article-detail.component.html',
    styleUrls: [ 'hero-detail.component.css' ]
})


export class ArticleDetailComponent implements OnInit {
    constructor(
        private articleService: ArticleService,
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    article: Article;
    authors: Hero[] = [];

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.articleService.getArticle(+params['id']))
            .subscribe(article => this.article = article);

        this.route.params
            .switchMap((params: Params) => this.heroService.getHeroes())
            .subscribe(authors => this.authors = authors);
    }
    
    save(selected_authors): void {
        this.articleService.save(this.article, selected_authors.join());
    }

    goBack(): void {
        this.location.back();
    }
}
