let swiperHero = new Swiper('.swiper-hero', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  swipeHandler: 'swiper-pagination',

  autoplay: {
    delay: 4000,
    waitForTransition: true,
    disableOnInteraction: false,
  },

  speed: 1000,

  effect: 'fade',

  on: {
    init: function () {
      const paginationBullets = document.querySelectorAll('.hero__pagination .swiper-pagination-bullet');

      paginationBullets.forEach(el => {
        el.innerHTML = `
          <svg class="hero__circle">
            <circle cx="50%" cy="50%" r="9" />
          </svg>
          <svg class="hero__active-circle">
            <circle cx="50%" cy="50%" r="9" />
          </svg>
          `;
      });
    },
  },

});


let swiperSpecial = new Swiper('.swiper-special', {
  direction: 'horizontal',
  spaceBetween: 32,
  slidesPerView: '1',

  navigation: {
    nextEl: '.special__arrow--right',
    prevEl: '.special__arrow--left'
  },

  speed: 600,

  breakpoints: {
    730: {
      slidesPerView: '2'
    },

    928: {
      slidesPerView: '3'
    },

    1256: {
      slidesPerView: 'auto',
    }
  }
});

let swiperUseful = new Swiper('.swiper-useful', {
  direction: 'horizontal',
  spaceBetween: 32,
  slidesPerView: '1',

  navigation: {
    nextEl: '.useful__arrow--right',
    prevEl: '.useful__arrow--left'
  },

  speed: 600,

  breakpoints: {
    730: {
      slidesPerView: '2'
    },

    885: {
      slidesPerView: '3'
    },

    1256: {
      slidesPerView: 'auto'
    }
  }
});

// catalog

let swiperCatalog = new Swiper('.swiper-catalog', {
  direction: 'horizontal',
  spaceBetween: 16,
  slidesPerView: '2',
  slidesPerGroup: '2',
  grid: {
    rows: 3,
    fill: 'ro/w'
  },

  pagination: {
    el: ".pagination",
    type: "bullets",
    clickable: true,
  },

  swipeHandler: 'pagination',

  speed: 10,

  breakpoints: {
    641: {
      spaceBetween: 32,
    },

    886: {
      slidesPerView: '3',
      slidesPerGroup: '3',
      spaceBetween: 32,
    }
  }

});

let swiperSame = new Swiper('.swiper-same', {
  direction: 'horizontal',
  spaceBetween: 16,
  slidesPerView: '2',

  navigation: {
    nextEl: '.same__arrow--right',
    prevEl: '.same__arrow--left'
  },

  speed: 600,

  breakpoints: {
    730: {
      spaceBetween: 32,
    },

    885: {
      slidesPerView: '3',
      spaceBetween: 32,
    },

    1025: {
      slidesPerView: '4',
      spaceBetween: 32,
    },
  }
});

let swiperProd = new Swiper('.swiper-product', {
  slidesPerView: 1,
  speed: 600,
  effect: 'fade',
})

let swiperNav = new Swiper('.swiper-nav', {
  speed: 600,
  watchSlidesProgress: true,

  breakpoints: {
    0: {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 38,
    },

    731: {
      direction: 'vertical',
      slidesPerView: 'auto',
      spaceBetween: 14,
    },

    977: {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 38,
    },
  }

})

let swiperModalNav = new Swiper('.swiper-modal-nav', {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 600,
  navigation: {
    nextEl: '.img-nav__arrow--right',
    prevEl: '.img-nav__arrow--left'
  },
  swipeHandler: 'img-nav__arrow',
  watchSlidesProgress: true,

  breakpoints: {
    480: {
      slidesPerView: 'auto',
      spaceBetween: 78,
    },

    730: {
      slidesPerView: 'auto',
      spaceBetween: 78,
    },

    1256: {
      slidesPerView: 'auto',
      spaceBetween: 78,
    },
  }

})

let swiperModal = new Swiper('.swiper-modal', {
  slidesPerView: 1,
  speed: 600,
  effect: 'fade'
})

const sliderNavItems = document.querySelectorAll('.img-nav__item--prod');

sliderNavItems.forEach((el, index) => {
  el.setAttribute('data-index', index);

  el.addEventListener('click', (e) => {
    const index = parseInt(e.currentTarget.dataset.index);
    console.log(index)
    swiperProd.slideTo(index);
  });
});

const sliderNavItemsModal = document.querySelectorAll('.img-nav__item--modal');

sliderNavItemsModal.forEach((el, index) => {
  el.setAttribute('data-index', index);

  el.addEventListener('click', (e) => {
    const index = parseInt(e.currentTarget.dataset.index);
    console.log(index)
    swiperModal.slideTo(index);
  });
});



