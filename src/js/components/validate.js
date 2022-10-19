// inputmask
const form = document.querySelector('.form-connect');

function checkHtml(e) {
  if (document.body.contains(form)) {
    const telSelector = form.querySelector('input[type="tel"]');
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    const validation = new JustValidate('.form-connect');

    let checkMail = function () {
      if (form.classList.contains('connect')) {
        validation.addField('.input-mail', [
          {
            rule: 'required',
            value: true,
            errorMessage: 'Email обязателен',
          },
          {
            rule: 'email',
            value: true,
            errorMessage: 'Введите корректный Email',
          },
        ])
      }
    }

    checkMail();

    validation
      .addField('.input-name', [
        {
          rule: 'minLength',
          value: 2,
          errorMessage: 'Имя должно содержать не менее 2 символов'
        },
        {
          rule: 'maxLength',
          value: 30,
        },
        {
          rule: 'required',
          value: true,
          errorMessage: 'Введите имя!'
        }
      ])
      .addField('.input-tel', [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Телефон обязателен',
        },
        {
          rule: 'function',
          validator: function () {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
          errorMessage: 'Введите корректный телефон',
        },
      ])
      .onSuccess((event) => {

        console.log('Validation passes and form submitted', event);

        let formData = new FormData(event.target);

        console.log(...formData);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
              popup();
            }
          }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        event.target.reset();
      });


    let popup = function () {
      const modal = document.querySelector('.modal');
      const modalContainer = document.querySelectorAll('.modal__container');
      const modalThanks = document.querySelector('.modal__container--thanks');

      modal.classList.add('is-open');

      modalThanks.classList.add('animate-open');
      modalThanks.classList.add('modal-open');

      const modalCloseBtn = document.querySelectorAll('.modal__close');

      modalCloseBtn.forEach(e => {
        e.addEventListener('click', function (el) {
          el.preventDefault();
          modal.classList.remove('is-open');

          modalContainer.forEach(m => {
            m.classList.remove('modal-open');
            m.classList.remove('animate-open');
          });

          enableScroll();
        });
      });


      lockPadding = () => {
        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
        document.body.style.paddingRight = paddingOffset;
      }

      unlockPadding = () => {
        document.body.style.paddingRight = '0px';
      }

      disableScroll = () => {
        let pagePosition = window.scrollY;
        this.lockPadding();
        document.body.classList.add('disable-scroll');
        document.body.dataset.position = pagePosition;
        document.body.style.top = -pagePosition + 'px';
      }

      enableScroll = () => {
        let pagePosition = parseInt(document.body.dataset.position, 10);
        this.unlockPadding();
        document.body.style.top = 'auto';
        document.body.classList.remove('disable-scroll');
        window.scroll({
          top: pagePosition,
          left: 0
        });
        document.body.removeAttribute('data-position');
      }
    }
  }
}

checkHtml(form);
