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
var core_1 = require('@angular/core');
var hero_service_1 = require("./hero.service");
var article_service_1 = require("./article.service");
var DashboardComponent = (function () {
    function DashboardComponent(heroService, articleService) {
        this.heroService = heroService;
        this.articleService = articleService;
        this.heroes = [];
        this.articles = [];
    }
    DashboardComponent.prototype.deleteHero = function (hero) {
        if (confirm('Êtes-vous sûr de vouloir supprimer ' + hero.firstname + ' ' + hero.lastname.toUpperCase() + ' de la liste des auteurs ?')) {
            this.heroService.del(hero);
            this.heroes.splice(this.heroes.indexOf(hero), 1);
        }
    };
    DashboardComponent.prototype.deleteArticle = function (article) {
        if (confirm("Êtes-vous sûr de vouloir supprimer l'article '" + article.title + "' de la liste des articles ?")) {
            this.articleService.del(article);
            this.articles.splice(this.articles.indexOf(article), 1);
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes; });
        this.articleService.getArticles()
            .then(function (articles) { return _this.articles = articles; });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, article_service_1.ArticleService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map