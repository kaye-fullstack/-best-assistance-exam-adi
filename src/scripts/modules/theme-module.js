AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

    const swiperBanner = new Swiper('.swiper-banner .swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });

    const swiperReading = new Swiper('.swiper-reading .swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 0,
    });
  };

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
  };

  return {
    init: init,
  };
})();
