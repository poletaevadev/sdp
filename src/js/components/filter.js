document.querySelectorAll('.filter__label').forEach(dropdownActive => {
  dropdownActive.addEventListener('click', function (e) {
    let dropdownBtns = this;
    let drops = dropdownBtns.parentElement.querySelector('.filter__content');
    e.preventDefault();
    document.querySelectorAll('.filter__label').forEach(el => {
      if (el != dropdownBtns) {
        el.classList.remove('filter__label--active');
      }
    });
    document.querySelectorAll('.filter__content').forEach(el => {
      if (el != drops) {
        el.classList.remove('filter__content--active');
      }
    });
    dropdownBtns.classList.toggle('filter__label--active');
    drops.classList.toggle('filter__content--active');
  });
});

document.addEventListener('click', function (e) {
  let currentElement = e.target;
  if (!currentElement.closest('.filter__content') && !currentElement.closest('.filter__label')) {
    document.querySelectorAll('.filter__content').forEach(el => {
      el.classList.remove('filter__content--active');
    });
    document.querySelectorAll('.filter__label').forEach(el => {
      el.classList.remove('filter__label--active');
    });
  }
});
