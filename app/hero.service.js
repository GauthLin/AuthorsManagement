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
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'http://localhost/GestionArticle/web/app_dev.php/api/auteur'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    }
    // Envoie un requête un symfony pour récupérer un auteur par son identifiant
    HeroService.prototype.getHero = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    // Envoie une requête à symfony pour récupérer tous les auteurs
    HeroService.prototype.getHeroes = function () {
        return this.http
            .get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Envoie une requête à symfony pour créer un auteur
    HeroService.prototype.create = function (firstname, lastname, email) {
        var form = new http_1.URLSearchParams();
        form.set('firstname', firstname);
        form.set('lastname', lastname);
        form.set('email', email);
        return this.http
            .post(this.heroesUrl, form.toString(), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // Envoie une requête à symfony pour sauver un auteur modifier
    HeroService.prototype.save = function (hero) {
        var form = new http_1.URLSearchParams();
        form.set('id', hero.id.toString());
        form.set('firstname', hero.firstname);
        form.set('lastname', hero.lastname);
        form.set('email', hero.email);
        return this.http
            .put(this.heroesUrl, form.toString(), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // Envoie une requête à symfony pour supprimer un auteur par son identifiant
    HeroService.prototype.del = function (hero) {
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .delete(url)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    // Permet d'afficher les erreurs du formulaire
    HeroService.prototype.displayErrors = function (errors) {
        var errorNode = document.getElementById("display-errors");
        // Suppression des anciennes erreurs
        while (errorNode.firstChild) {
            errorNode.removeChild(errorNode.firstChild);
        }
        // Affichage des erreurs à l'utilisateur
        var ul = document.createElement('ul');
        ul.className = 'error';
        errors.forEach(function (error) {
            var li = document.createElement("li");
            var textnode = document.createTextNode(error);
            li.appendChild(textnode);
            ul.appendChild(li);
        });
        errorNode.appendChild(ul);
    };
    // Permet d'afficher dans la console le message d'erreur si la requête plante
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map