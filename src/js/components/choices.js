const selector = document.querySelector(".choices")
const choices = new Choices(selector, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  classNames: {
    containerOuter: 'choices header-top__select',
  },

});

