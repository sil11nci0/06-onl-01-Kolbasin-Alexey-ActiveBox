$('.clients-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.clients-description',
})
$('.clients-description').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.clients-img',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
})
