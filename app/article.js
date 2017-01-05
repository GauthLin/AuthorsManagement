"use strict";
var Article = (function () {
    function Article(id, title, date, text, authors) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.text = text;
        this.authors = authors;
    }
    return Article;
}());
exports.Article = Article;
//# sourceMappingURL=article.js.map