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
  Map: {
    Main: {
      ID: 'company-map',
      center: [ 53.198887, 44.980349 ],
      zoom: 17,
      customIcon: true,
      customIconProperties: {
        iconImageHref: `${window.location.protocol}//${window.location.host}/img/icon-pin.svg`,
        iconImageSize: [ 40, 44 ],
        iconImageOffset: [ -20, -40 ]
      },
    },
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
    Staff: {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        prevEl: '.staff__prev',
        nextEl: '.staff__next',
      },
      pagination: {
        el: '.staff__pagination',
        clickable: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    },
    Testimonials: {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: true,
      loop: true,
      pagination: {
        el: '.testimonials__pagination',
        type: 'fraction',
      },
    }
  },
};
