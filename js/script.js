$(document).ready(function () {
  $('.clients__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'linear',
    /*  autoplay: true,
    autoplaySpeed: 2000, */
    appendDots: $('.clients__dots'),
  })
})
