// more products (in rate)

let moreBtn = document.querySelector('.rate__more-btn');

function checkHtml(e) {
  if (document.body.contains(e)) {
    let moreContainer = document.querySelector('.rate__more');
    let hiddenCards = document.querySelectorAll('.rate__item--hidden');
    let hiddenCardsTab = document.querySelectorAll('.rate__item--hidden-tab');

    moreBtn.addEventListener('click', function () {
      moreContainer.classList.add('rate__more--hidden');

      hiddenCards.forEach(e => {
        e.classList.remove('rate__item--hidden');
        e.classList.add('fade-in');
      });

      if (window.innerWidth <= 1255) {
        hiddenCardsTab.forEach(e => {
          e.classList.remove('rate__item--hidden-tab');
          e.classList.add('fade-in');
        });
      }
    });
  }
}

checkHtml(moreBtn);
