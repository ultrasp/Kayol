function toggleCourses() {
  document.querySelector('#course-wrapper')?.classList.toggle('show');

  if (document.querySelector('#course-wrapper')?.classList?.contains('show')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}
function toggleSidear() {
  document.querySelector('#azasako')?.classList.toggle('show');

  if (document.querySelector('#azasako')?.classList?.contains('show')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}

$('.course-works-carousel').on('afterChange', function () {
  var dataId =
    $('.course-works-carousel-card.slick-current').attr('data-slick-index') * 1;
  $('#course-works-carousel-active-num').html(dataId + 1);
});
document.querySelector('#course-works-carousel_num').innerHTML =
  document.querySelectorAll('.course-works-carousel-card')?.length;

$('.course-works-speaker-carousel').on('afterChange', function () {
  var dataId =
    $('.course-works-speaker-carousel-card.slick-current').attr(
      'data-slick-index'
    ) * 1;
  $('#course-works-speaker-carousel-active-num').html(dataId + 1);
});
// document.querySelector('#course-works-speaker-carousel_num').innerHTML =
//   document.querySelectorAll('.course-works-speaker-carousel-card')?.length;

$('.rewiev-carousel').on('afterChange', function () {
  var dataId =
    $('.rewiev-carousel-item.slick-current').attr('data-slick-index') * 1;
  $('#rewiev-carousel-active-num').html(dataId + 1);
});
document.querySelector('#rewiev-carousel_num').innerHTML =
  document.querySelectorAll('.rewiev-carousel-item')?.length;

$('.course-works-carousel').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  //   initialSlide: 2,
  slidesToScroll: 1,
  centerMode: false,
  prevArrow: $('.prev-course-works-carousel'),
  nextArrow: $('.next-course-works-carousel'),
  // autoplay: true,
});
$('.course-works-speaker-carousel').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  //   initialSlide: 2,
  slidesToScroll: 1,
  centerMode: false,
  prevArrow: $('.prev-course-works-speaker-carousel'),
  nextArrow: $('.next-course-works-speaker-carousel'),
  // autoplay: true,
});

$('.rewiev-carousel').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  initialSlide: 1,
  slidesToScroll: 1,
  centerMode: false,
  prevArrow: $('.prev-rewiev-carousel'),
  nextArrow: $('.next-rewiev-carousel'),
  // autoplay: true,
  centerMode: true,

  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
  ],
});
