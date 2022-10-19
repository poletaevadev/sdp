// menu

function setBurger(params) {
  const nav = document.querySelector(`.${params.navClass}`);
  const btn = document.querySelector(`.${params.btnClass}`);
  const menu = document.querySelector(`.${params.menuClass}`);

  btn.addEventListener("click", function () {
    this.classList.toggle(params.activeClass);

    if (
      !menu.classList.contains(params.activeClass) &&
      !nav.classList.contains(params.activeClass)
    ) {
      nav.classList.add(params.activeClass);
      menu.classList.add(params.activeClass);

      if (window.innerWidth <= 586) {
        document.body.style.overflow = 'hidden';
      }

    } else {
      nav.classList.remove(params.activeClass);
      menu.classList.remove(params.activeClass);

      if (window.innerWidth <= 586) {
        document.body.removeAttribute('style');
      }
    }
  });
}

setBurger({
  navClass: "nav",// класс блока с бургером
  btnClass: "burger", // класс бургера
  menuClass: "nav__wrap", // класс меню
  activeClass: "is-opened", // класс открытого состояния
});

const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav__wrap');

let deleteFun = function () {
  document.addEventListener('click', function (e) {
    let currentElement = e.target;
    if (!currentElement.closest('.nav')) {
      nav.classList.remove('is-opened');
      menu.classList.remove('is-opened');
      burger.classList.remove('is-opened');
    }
  });
}

deleteFun();

document.querySelectorAll('.nav__link').forEach(function (link) {
  link.addEventListener('click', function (e) {
    if (window.innerWidth <= 885) {
      nav.classList.remove('is-opened');
      menu.classList.remove('is-opened');
      burger.classList.remove('is-opened');
      document.body.removeAttribute('style');
    }
  });
});
