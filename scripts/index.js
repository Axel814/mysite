'use strict';

fetch('news/news.json').then(async response => {
    const articles = await response.json();
    const news = document.getElementById('newsContainer');

    for (const article of articles) {
        const articleName = news.appendChild(
            document.createElement('h3')
        );
        articleName.textContent = article.articleName;

        const articleContents = news.appendChild(
            document.createElement('p')
        );
        articleContents.textContent = article.articleContents;
    }
}, () => {
    const news = document.getElementById('newsContainer');
    const warning = news.appendChild(document.createElement('h3'));
    warning.textContent = 'Ha ocurrido un error a la hora de cargar noticias';
});