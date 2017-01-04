import { Injectable }    from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import {Hero} from "./hero";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    private heroesUrl = 'http://localhost/GestionArticle/web/app_dev.php/api/auteur';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

    constructor(private http: Http) { }

    // Envoie un requête un symfony pour récupérer un auteur par son identifiant
    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => {
                return response.json()
            })
            .catch(this.handleError);
    }

    // Envoie une requête à symfony pour récupérer tous les auteurs
    getHeroes(): Promise<Hero[]> {
        return this.http
            .get(this.heroesUrl)
            .toPromise()
            .then(response => response.json() as Hero[])
            .catch(this.handleError);
    }

    // Envoie une requête à symfony pour créer un auteur
    create(firstname: string, lastname: string, email: string) {
        let form = new URLSearchParams();
        
        form.set('firstname', firstname);
        form.set('lastname', lastname);
        form.set('email', email);
        
        return this.http
            .post(this.heroesUrl, form.toString(), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    // Envoie une requête à symfony pour sauver un auteur modifier
    save(hero: Hero) {
        let form = new URLSearchParams();

        form.set('id', hero.id.toString());
        form.set('firstname', hero.firstname);
        form.set('lastname', hero.lastname);
        form.set('email', hero.email);

        return this.http
            .put(this.heroesUrl, form.toString(), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    // Envoie une requête à symfony pour supprimer un auteur par son identifiant
    del(hero: Hero) {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .delete(url)
            .toPromise()
            .then(response => {
                return response.json()
            })
            .catch(this.handleError);
    }

    // Permet d'afficher les erreurs du formulaire
    displayErrors(errors): void {
        var errorNode = document.getElementById("display-errors");
        // Suppression des anciennes erreurs
        while (errorNode.firstChild) {
            errorNode.removeChild(errorNode.firstChild);
        }

        // Affichage des erreurs à l'utilisateur
        var ul = document.createElement('ul');
        ul.className = 'error';
        errors.forEach(function(error) {
            var li = document.createElement("li");
            var textnode = document.createTextNode(error);
            li.appendChild(textnode);
            ul.appendChild(li);
        });

        errorNode.appendChild(ul);
    }

    // Permet d'afficher dans la console le message d'erreur si la requête plante
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
