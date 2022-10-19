const search = document.getElementById('store');
const matchList = document.getElementById('match-list');

function checkHtml(e) {
  if (document.body.contains(e)) {
    const searchStore = async searchText => {
      const res = await fetch('../data/stores.json');
      const stores = await res.json();

      let matches = stores.filter(store => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return store.city.match(regex) || store.metro.match(regex) || store.street.match(regex);
      });

      outputHtml(matches);

      if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML = '';
        matchList.classList.remove('active');
      }
    };

    const outputHtml = matches => {
      if (matches.length > 0) {
        const html = matches.map(match => `
          <div class="stores__item flex">
            <p class="stores__title">${match.city}, ${match.name}</p>
            <p class="stores__address">м. ${match.metro}, ул. ${match.street}, д.${match.building}</p>
            <a class="stores__link" href=${match.link}></a>
          </div>
        `)
          .join('');

        matchList.innerHTML = html;
        matchList.classList.add('active');
      } else {
        const notFound = `
        <div class="stores__item stores__item--single">
          <p class="stores__title">По вашему запросу ничего не найдено</p>
        </div>`
        matchList.innerHTML = notFound;
        matchList.classList.add('active');
      }

      if (matches.length < 2) {
        const item = document.querySelector('.stores__item');
        item.style.borderRadius = '10px';
      }
    }

    search.addEventListener('input', () => searchStore(search.value));
  }
}

checkHtml(search);

