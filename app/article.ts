// Définit un auteur
import {Hero} from "./hero";

export class Article {
    constructor(id: number, title: string, date: string, text: string, authors: Hero[]) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.text = text;
        this.authors = authors;
    }

    id: number;
    title: string;
    date: string;
    text: string;
    authors: Hero[];
}