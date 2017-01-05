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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var hero_service_1 = require('./hero.service');
var article_service_1 = require("./article.service");
var AddArticleComponent = (function () {
    function AddArticleComponent(heroService, articleService, route, location) {
        this.heroService = heroService;
        this.articleService = articleService;
        this.route = route;
        this.location = location;
        this.authors = [];
    }
    // Fonction appelé lorsque l'utilisateur clique sur le bouton "Ajouter l'article"
    AddArticleComponent.prototype.addArticle = function (title, date, text, authors_selected) {
        this.articleService.create(title, date, text, authors_selected.join());
    };
    // Fonction appelé lorsque l'utilisateur clique sur le bouton "Annuler"
    AddArticleComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (authors) { return _this.authors = authors; });
    };
    AddArticleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-article',
            templateUrl: 'add-article.component.html',
            styleUrls: ['hero-detail.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, article_service_1.ArticleService, router_1.ActivatedRoute, common_1.Location])
    ], AddArticleComponent);
    return AddArticleComponent;
}());
exports.AddArticleComponent = AddArticleComponent;
//# sourceMappingURL=add-article.component.js.map