function toggleSidear() {
  document.querySelector('#azasako')?.classList.toggle('show');

  if (document.querySelector('#azasako')?.classList?.contains('show')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}

function goPage(link) {
  window.location.href = `./${link}.html`;
}

function toggleCourses() {
  document.querySelector('#course-wrapper')?.classList.toggle('show');

  if (document.querySelector('#course-wrapper')?.classList?.contains('show')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}

function toggleModalLets(list) {
  if (list !== undefined && list !== null) {
    let element = list?.map(
      (x, i) =>
        `
          <div class="carousel-item ${i == 0 ? 'active' : ''}">
               <img  class="d-block w-100" src=${x} alt="project hover-text">
           </div>    
        `
    );

    $('#pic-content').html(element);
    document.body.style.overflow = 'hidden';
    document.querySelector('#modal-lets')?.classList.add('show');
  }
}
function closeModalLets() {
  document.querySelector('#modal-lets')?.classList.remove('show');
  document.body.style.overflow = 'auto';
}

document.querySelector('#team_num').innerHTML = document.querySelectorAll(
  '.team-carousel-card-team'
)?.length;

$('.lets-carousel').on('afterChange', function () {
  var dataId = $('.slick-current').attr('data-slick-index') * 1;
  $('#card-active').html(dataId + 1);
});

$('.events-carousel').on('afterChange', function () {
  var dataId =
    $('.lets-carousel-card-event.slick-current').attr('data-slick-index') * 1;
  $('#event-active-num').html(dataId + 1);
});

$('.team-carousel').on('afterChange', function () {
  var dataId =
    $('.team-carousel-card-team.slick-current').attr('data-slick-index') * 1;
  $('#team-active-num').html(dataId + 1);
});
$('.work-carousel').on('afterChange', function () {
  var dataId =
    $('.work-carousel-card.slick-current').attr('data-slick-index') * 1;
  $('#work-active-num').html(dataId + 1);
});

$('.client-carousel').on('afterChange', function () {
  var dataId =
    $('.client-carousel-card.slick-current').attr('data-slick-index') * 1;
  $('#client-active-num').html(dataId + 1);
});
document.querySelector('#client_num').innerHTML = document.querySelectorAll(
  '.client-carousel-card'
)?.length;

$('.live-carousel').on('afterChange', function () {
  var dataId =
    $('.live-carousel-card.slick-current').attr('data-slick-index') * 1;
  $('#live-active-num').html(dataId + 1);
});
document.querySelector('#live_num').innerHTML = document.querySelectorAll(
  '.live-carousel-card'
)?.length;

$('.news-carousel').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  // centerMode: true,
  // prevArrow: $('.prev-team'),
  // nextArrow: $('.next-team'),
  autoplay: true,
  responsive: [
    // {
    //   breakpoint: 1400,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //   },
    // },
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
        // centerMode: true,
        slidesToScroll: 1,
      },
    },
  ],
});

$('.client-carousel').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  // centerMode: true,
  prevArrow: $('.prev-client'),
  nextArrow: $('.next-client'),
  autoplay: true,
  responsive: [
    // {
    //   breakpoint: 1400,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //   },
    // },
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
        // centerMode: true,
        slidesToScroll: 1,
      },
    },
  ],
});

$('.live-carousel').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  initialSlide: 2,
  slidesToScroll: 1,
  centerMode: true,
  prevArrow: $('.prev-live'),
  nextArrow: $('.next-live'),
  // autoplay: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        initialSlide: 1,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        initialSlide: 1,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        // centerMode: true,
        slidesToScroll: 1,
      },
    },
  ],
});

document.querySelectorAll('.live-card').forEach((x) => {
  x.querySelector('.play').addEventListener('click', () => {
    let VideoElement = x.querySelector('video');

    if (VideoElement.paused === true) {
      document.querySelectorAll('.live-card').forEach((el) => {
        let Vid = el.querySelector('video');

        if (Vid.paused === false) {
          Vid.pause();
          el.querySelector('.play').querySelector('.off').style.display =
            'none';
          el.querySelector('.play').querySelector('.on').style.display =
            'inline-block';
        }
      });

      VideoElement.play();
      x.querySelector('.play').querySelector('.on').style.display = 'none';
      x.querySelector('.play').querySelector('.off').style.display =
        'inline-block';
    } else {
      document.querySelectorAll('.live-card').forEach((el) => {
        let Vid = el.querySelector('video');

        if (Vid.paused === false) {
          Vid.pause();
          el.querySelector('.play').querySelector('.off').style.display =
            'none';
          el.querySelector('.play').querySelector('.on').style.display =
            'inline-block';
        }
      });

      VideoElement.pause();
      x.querySelector('.play').querySelector('.off').style.display = 'none';
      x.querySelector('.play').querySelector('.on').style.display =
        'inline-block';
    }
  });

  x.querySelector('.sound').addEventListener('click', () => {
    let VideoElement = x.querySelector('video');

    if (VideoElement.muted === false) {
      VideoElement.muted = true;
      x.querySelector('.sound').querySelector('.on').style.display = 'none';
      x.querySelector('.sound').querySelector('.off').style.display =
        'inline-block';
    } else {
      VideoElement.muted = false;
      x.querySelector('.sound').querySelector('.off').style.display = 'none';
      x.querySelector('.sound').querySelector('.on').style.display =
        'inline-block';
    }
  });
});
