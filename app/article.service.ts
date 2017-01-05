import { Injectable }    from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import {Hero} from "./hero";

import 'rxjs/add/operator/toPromise';
import {Article} from "./article";

@Injectable()
export class ArticleService {
    private articleUrl = 'http://localhost/GestionArticle/web/app_dev.php/api/article';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

    constructor(private http: Http) { }

    // Envoie un requête à symfony pour récupérer un article par son identifiant
    getArticle(id: number): Promise<Article> {
        const url = `${this.articleUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Article)
            .catch(this.handleError);
    }

    // Envoie une requête à symfony pour récupérer tous les articles
    getArticles(): Promise<Article[]> {
        return this.http
            .get(this.articleUrl)
            .toPromise()
            .then(response => response.json() as Article[])
            .catch(this.handleError);
    }

    // Envoie une requête à symfony pour créer un article
    create(title: string, date: string, text: string, authors_selected: string) {
        let form = new URLSearchParams();
        
        form.set('title', title);
        form.set('date', date);
        form.set('text', text);
        form.set('authors', authors_selected);
        
        return this.http
            .post(this.articleUrl, form.toString(), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    // Envoie une requête à symfony pour sauver un article modifié
    save(article: Article, authors_selected: string) {
        let form = new URLSearchParams();

        form.set('id', article.id.toString());
        form.set('title', article.title);
        form.set('date', article.date);
        form.set('text', article.text);
        form.set('authors', authors_selected);

        return this.http
            .put(this.articleUrl, form.toString(), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    // Envoie une requête à symfony pour supprimer un artice par son identifiant
    del(article: Article) {
        const url = `${this.articleUrl}/${article.id}`;
        return this.http
            .delete(url)
            .toPromise()
            .then(response => {
                return response.json()
            })
            .catch(this.handleError);
    }

    // Permet d'afficher dans la console le message d'erreur si la requête plante
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
