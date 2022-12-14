function news() {
    fetch(`https://newsapi.org/v2/top-headlines?country=id&apiKey=482dd35b3b884691a5236331de3391c1`)
    .then((respon) => respon.json())
    .then((respon) => {
      console.log(respon);
      const data = respon.articles;
      let cards = '';
      data.forEach(a => cards += showCards(a));
      const article= document.getElementById("data");
      article.innerHTML = cards;
    })
  }
  
  
  news();
  
  const seachButton = document.querySelector('.search-button');
  seachButton.addEventListener('click', function () {
    const inputKeyword =document.querySelector('.input-keyword');
  
    fetch(`https://newsapi.org/v2/everything?q=${inputKeyword.value}&apiKey=482dd35b3b884691a5236331de3391c1`)
      .then(res => res.json())
      .then(res => {
        const data = res.articles;
        let cards = '';
        data.forEach(a => cards += showCards(a));
        document.getElementById("data").innerHTML = cards;
      })
  });
  
  
  function showCards(articles) {
    return `<div class="col">
    <div class="card h-100">
      <img src="${articles.urlToImage}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${articles.title}</h5>
        <p class="card-text">
          ${articles.description}
          <small class="text-muted">${articles.author}</small>
        </p>
        <a class="btn btn-primary" href="${articles.url}" role="button">Read More</a>
      </div>
      <div class="card-footer">
        <small class="text-muted">${articles.publishedAt}</small>
      </div>
    </div>
  </div>`;
  }
  