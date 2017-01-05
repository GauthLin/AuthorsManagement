"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Keep the Input import for now, we'll remove it later:
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var article_service_1 = require('./article.service');
var hero_service_1 = require("./hero.service");
var ArticleDetailComponent = (function () {
    function ArticleDetailComponent(articleService, heroService, route, location) {
        this.articleService = articleService;
        this.heroService = heroService;
        this.route = route;
        this.location = location;
        this.authors = [];
    }
    ArticleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.articleService.getArticle(+params['id']); })
            .subscribe(function (article) { return _this.article = article; });
        this.route.params
            .switchMap(function (params) { return _this.heroService.getHeroes(); })
            .subscribe(function (authors) { return _this.authors = authors; });
    };
    ArticleDetailComponent.prototype.save = function (selected_authors) {
        this.articleService.save(this.article, selected_authors.join());
    };
    ArticleDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ArticleDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-article-detail',
            templateUrl: 'article-detail.component.html',
            styleUrls: ['hero-detail.component.css']
        }), 
        __metadata('design:paramtypes', [article_service_1.ArticleService, hero_service_1.HeroService, router_1.ActivatedRoute, common_1.Location])
    ], ArticleDetailComponent);
    return ArticleDetailComponent;
}());
exports.ArticleDetailComponent = ArticleDetailComponent;
//# sourceMappingURL=article-detail.component.js.map