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

document.querySelector('#card-num').innerHTML = document.querySelectorAll(
  '.lets-carousel-card'
)?.length;

document.querySelector('#event_num').innerHTML = document.querySelectorAll(
  '.lets-carousel-card-event'
)?.length;

document.querySelector('#team_num').innerHTML = document.querySelectorAll(
  '.team-carousel-card-team'
)?.length;

document.querySelector('#work_num').innerHTML = document.querySelectorAll(
  '.work-carousel-card'
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
