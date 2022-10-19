window.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById('search-product');
  const matchListProd = document.getElementById('product-list');

  const section = document.querySelector('section');
  const searchBtn = document.querySelector('.search__btn');
  const plug = document.querySelector('.plug');
  const heroSwiper = document.querySelector('.hero__swiper');


  const searchProduct = async searchText => {
    const res = await fetch('../data/products.json');
    const products = await res.json();

    let matches = products.filter(product => {
      const regex = new RegExp(`^${searchText}`, 'gi');
      return product.name.match(regex) || product.art.match(regex);
    });

    outputHtml(matches);

    if (searchText.length === 0) {
      matches = [];
      matchListProd.innerHTML = '';
      matchListProd.classList.remove('active');

      if (section.classList.contains('hero')) {
        heroSwiper.classList.remove('hero-hidden');
        plug.classList.add('hero-hidden');

        if (window.innerWidth <= 640) {
          const heroBtnMob = document.querySelector('.hero__btn--mob');
          heroBtnMob.classList.remove('hero-hidden');
        }
      }
    }
  };

  const outputHtml = matches => {
    if (matches.length > 0) {
      const html = matches.map(match => `
        <div class="search-products__item flex">
          <p class="search-products__title">${match.name}, "${match.art}"</p>
          <a class="search-products__link" href=${match.link}></a>
        </div>
      `)
        .join('');

      matchListProd.innerHTML = html;
      matchListProd.classList.add('active');
    } else {

      if (section.classList.contains('hero')) {

        searchBtn.addEventListener('click', function (e) {
          e.preventDefault();
          heroSwiper.classList.add('hero-hidden');
          plug.classList.remove('hero-hidden');

          if (window.innerWidth <= 640) {
            const heroBtnMob = document.querySelector('.hero__btn--mob');
            heroBtnMob.classList.add('hero-hidden');
          }
        });

      } else {
        const notFound = `
        <div class="search-products__item search-products__item--single">
          <p class="search-products__title">По вашему запросу ничего не найдено</p>
        </div>`
        matchListProd.innerHTML = notFound;
        matchListProd.classList.add('active');
      }
    }

    if (matches.length < 2) {
      const item = document.querySelector('.search-products__item');
      item.style.borderRadius = '10px';
    }
  }

  searchInput.addEventListener('input', () => searchProduct(searchInput.value));
});
