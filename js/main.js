import {
  Options,
} from './modules/options.js';

import {
  iosVhFix,
  initSlider
} from './modules/utils.js';

import {
  initModal
} from './modules/modal.js';

import {
  initScrollTop
} from './modules/scroll-top.js';

import {
  validateForms
} from './modules/validate.js';

import {
  initMobileMenu
} from './modules/mobile-menu.js';

// все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
// в load следует добавить скрипты, не участвующие в работе первого экрана
document.addEventListener( 'DOMContentLoaded', () => {
  // Settings
  // ---------------------------------
  iosVhFix();
  new JustPhoneMask( Options.Mask.bodyMask );

  // Modules
  // ---------------------------------

  window.addEventListener( 'load', () => {
    initMobileMenu();
    initModal();
    initSlider( '.hero-slider__block', Options.Swiper.Hero );
    initScrollTop();
    validateForms();
  } );
} );
