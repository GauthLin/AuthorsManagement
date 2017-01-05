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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
        this.articleUrl = 'http://localhost/GestionArticle/web/app_dev.php/api/article'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    }
    // Envoie un requête à symfony pour récupérer un article par son identifiant
    ArticleService.prototype.getArticle = function (id) {
        var url = this.articleUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Envoie une requête à symfony pour récupérer tous les articles
    ArticleService.prototype.getArticles = function () {
        return this.http
            .get(this.articleUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Envoie une requête à symfony pour créer un article
    ArticleService.prototype.create = function (title, date, text, authors_selected) {
        var form = new http_1.URLSearchParams();
        form.set('title', title);
        form.set('date', date);
        form.set('text', text);
        form.set('authors', authors_selected);
        return this.http
            .post(this.articleUrl, form.toString(), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // Envoie une requête à symfony pour sauver un article modifié
    ArticleService.prototype.save = function (article, authors_selected) {
        var form = new http_1.URLSearchParams();
        form.set('id', article.id.toString());
        form.set('title', article.title);
        form.set('date', article.date);
        form.set('text', article.text);
        form.set('authors', authors_selected);
        return this.http
            .put(this.articleUrl, form.toString(), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // Envoie une requête à symfony pour supprimer un artice par son identifiant
    ArticleService.prototype.del = function (article) {
        var url = this.articleUrl + "/" + article.id;
        return this.http
            .delete(url)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    // Permet d'afficher dans la console le message d'erreur si la requête plante
    ArticleService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ArticleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ArticleService);
    return ArticleService;
}());
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map