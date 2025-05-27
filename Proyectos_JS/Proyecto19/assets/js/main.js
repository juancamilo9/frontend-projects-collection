window.addEventListener("DOMContentLoaded", () => {
  // Campos del cformulario
  let title = document.getElementById("title");
  let subtitle = document.getElementById("subtitle");
  let description = document.getElementById("description");

  // Formulario
  let form = document.querySelector(".form__create");
  // cajas de los articulos
  let articles = document.querySelector(".layout__article");

  let articleArray = [];

  let create = () => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (title.value && subtitle.value && description.value) {
        let article = {
          title: title.value,
          subtitle: subtitle.value,
          description: description.value,
        };

        articleArray.push(article)
        localStorage.setItem("articles", JSON.stringify(articleArray));
        showArticles()
      } else {
        alert("Faltan datos en el formulario");
      }
    });
  };

  
  let layoutArticle = (article) => {
    let templateArticle = `
            <article class="layout__card" id="layout__card">
                <header class="card__header" id="card__header">
                    <h6 class="header__author">${article.subtitle}</h6>
                </header>
                <div class="card__content">
                    <h1 class="content__title">${article.title}</h1>
                    <p class="content__description">${article.description}</p>
                    <button class="content__btn" id="btn_click">Leer más</button>
                </div>
            </article>`
    return templateArticle
  };

  let showArticles = () => {
    articles.innerHTML= ""
    articleArray = JSON.parse(localStorage.getItem("articles"))
    if (articleArray.length > 0){
      articleArray.forEach(article => {
        articles.innerHTML += layoutArticle(article) 
      });
    }
  };

  create()
  showArticles()
});
