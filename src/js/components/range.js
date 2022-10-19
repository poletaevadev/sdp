// // range
const sliderRange = document.getElementById('range');

function checkHtml(e) {
  if(document.body.contains(e)) {
    noUiSlider.create(e, {
      start: [10000, 101000],
      connect: true,
      range: {
        'min': 2000,
        'max': 150000
      },
      step: 1000,
      orientation: 'horizontal',
    });
  }
}

checkHtml(sliderRange);
