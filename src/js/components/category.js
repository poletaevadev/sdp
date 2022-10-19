let categoryBtn = document.querySelector('.search-select');
let categoryList = document.querySelector('.category');

categoryBtn.addEventListener('click', function (e) {
  e.preventDefault();
  categoryBtn.classList.toggle('search-select--active');
  categoryList.classList.toggle('category--open');
  deleteFun();
});

let deleteFun = function () {
  document.addEventListener('click', function (e) {
    let currentElement = e.target;
    if (!currentElement.closest('.search-select')) {
      categoryBtn.classList.remove('search-select--active');
      categoryList.classList.remove('category--open');
    }
  });
}





