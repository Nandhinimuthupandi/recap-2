const apiKey = '89616fa86aa34480aa3c71433e85e978';
const url = `https://newsapi.org/v2/everything?q=tesla&from=2023-05-25&sortBy=publishedAt&apiKey=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const articles = data.articles;
    const newsContainer = document.querySelector('.news-container');

    articles.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      `;
      newsContainer.appendChild(articleElement);
    });
  })
  .catch(error => console.log('Error:', error));
