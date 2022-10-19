const mapElem = document.querySelector('#map');
function checkHtml(e) {
  if (document.body.contains(e)) {
    ymaps.ready(init);
    function init() {
      const myMap = new ymaps.Map(
        "map",
        {
          center: [55.749884, 37.624082],
          zoom: 14,
          controls: ['geolocationControl', 'zoomControl']
        },
        {
          geolocationControlSize: "large",
          geolocationControlPosition: { top: "200px", right: "20px" },
          geolocationControlFloat: 'none',
          zoomControlSize: "small",
          zoomControlFloat: "none",
          zoomControlPosition: { top: "120px", right: "20px" }
        }
      );

      const myPlacemarkFirst = new ymaps.Placemark(
        [55.752010, 37.642301],
        {
          balloonContentHeader: '<p class="ymaps-2-1-79-balloon__title">SitDownPls на Солянке</p>',
          balloonContentBody: '<p class="ymaps-2-1-79-balloon__descr">м. Китай-город, ул. Солянка, д.24</p>' + '<a class="ymaps-2-1-79-balloon__tel tel" href="tel:+74958854547" aria-label="Позвонить">'
            + '<svg width="18" height="18">' + '<use xlink:href="/img/sprite.svg#tel"></use>' + '</svg>' + '+7 (495) 885-45-47' + '</a>' + '<div class="ymaps-2-1-79-balloon__time">' + '<span class="ymaps-2-1-79-balloon__descr"><span class="ymaps-2-1-79-balloon__descr--grey">Часы работы:</span> с 10:00 до 21:00</span>' + '</div>' + '<span class="ymaps-2-1-79-balloon__descr"><span class="ymaps-2-1-79-balloon__descr--grey">Что здесь:</span> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</span>'
        },
        {
          hideIconOnBalloonOpen: false,
          iconLayout: "default#image",
          iconImageHref: "./img/map-icon.svg",
          iconImageSize: [32, 22],
          iconImageOffset: [-10, 0],
        }
      );

      const myPlacemarkSecond = new ymaps.Placemark(
        [55.762933, 37.654173],
        {
          balloonContentHeader: '<p class="ymaps-2-1-79-balloon__title">SitDownPls на Покровке</p>',
          balloonContentBody: '<p class="ymaps-2-1-79-balloon__descr">м. Курская, ул. Покровка, д.14</p>' + '<a class="ymaps-2-1-79-balloon__tel tel" href="tel:+74958854547" aria-label="Позвонить">'
            + '<svg width="18" height="18">' + '<use xlink:href="/img/sprite.svg#tel"></use>' + '</svg>' + '+7 (495) 885-45-47' + '</a>' + '<div class="ymaps-2-1-79-balloon__time">' + '<span class="ymaps-2-1-79-balloon__descr"><span class="ymaps-2-1-79-balloon__descr--grey">Часы работы:</span> с 10:00 до 21:00</span>' + '</div>' + '<span class="ymaps-2-1-79-balloon__descr"><span class="ymaps-2-1-79-balloon__descr--grey">Что здесь:</span> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</span>'
        },
        {
          hideIconOnBalloonOpen: false,
          iconLayout: "default#image",
          iconImageHref: "./img/map-icon.svg",
          iconImageSize: [32, 22],
          iconImageOffset: [-10, 0],
        }
      );

      myMap.behaviors.disable('scrollZoom');

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        myMap.behaviors.disable('drag');
        myMap.setCenter([55.765384, 37.637962]);
      }

      myMap.options.set({ balloonPanelMaxMapArea: 0 });

      myMap.geoObjects.add(myPlacemarkFirst);
      myMap.geoObjects.add(myPlacemarkSecond);

      myPlacemarkFirst.balloon.open();

      setTimeout(() => {
        myMap.container.fitToViewport();
      }, 5000);
    }
  }
}
checkHtml(mapElem);

