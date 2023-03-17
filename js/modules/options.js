export const Options = {
  SmoothScroll: {
    speed: 900,
    speedAsDuration: true,
    updateURL: false,
  },
  Modal: {
    linkAttributeName: false,
    catchFocus: true,
    closeOnEsc: true,
    backscroll: true,
  },
  Mask: {
    bodyMask: ' (___) ___ __ __',
  },
  ValidationErrors: {
    errorFieldCssClass: 'invalid',
    errorLabelStyle: {
      color: '#CF4D4D',
      marginTop: '6px',
      fontSize: '12px',
      textAlign: 'left',
    },
  },
  Observer: {
    ScrollTop: {
      rootMargin: '600px',
      threshold: 1,
    },
  },
  RequestOptions: {
    HandlerURL: 'https://jsonplaceholder.typicode.com/posts',
    MethodGet: 'GET',
    MethodPost: 'POST',
  },
  Swiper: {
    Hero: {
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      loop: true,
      navigation: {
        prevEl: '.hero-slider__prev',
        nextEl: '.hero-slider__next',
      },
      pagination: {
        el: '.hero-slider__pagination',
        clickable: false,
      },
    },
  },
};
