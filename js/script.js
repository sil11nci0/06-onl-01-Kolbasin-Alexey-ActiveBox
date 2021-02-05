$(document).ready(function () {
  $('.clients__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'linear',
    /* autoplay: true,
    autoplaySpeed: 2000, */
    appendDots: $('.clients__dots'),
  })
})

/* $(document).ready(function () {
  $('.team__slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'linear',
    autoplay: true,
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1082,
        settings: {
          slidesToShow: 2,
          infinite: true,
          appendArrows: $('.team__arrows'),
        },
      },
    ],
  })
}) */
