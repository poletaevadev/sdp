const tooltip = document.getElementById('tooltip');

function checkHtml(e) {
  if(document.body.contains(e)) {
    tippy(e, {
      theme: 'custom',
      trigger: 'mouseenter focus click',
      content: 'Реплицированные с зарубежных источников, исследования формируют глобальную сеть.',
    });
  }
}

checkHtml(tooltip);

