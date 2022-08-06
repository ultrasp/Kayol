var myVideo = document.getElementById('video');

function playPause(link) {
  if (link === 'close') {
    document.body.style.overflow = 'auto';
    document.querySelector('#modal-video')?.classList.remove('show');
  } else {
    document.body.style.overflow = 'hidden';
    $('#video-modal').attr('src', link);
    document.querySelector('#modal-video')?.classList.add('show');
  }
}

document
  .querySelector('#toggle-lets-nav')
  .addEventListener('click', () => toggleSidear());

document
  .querySelector('#toggle-lets-list')
  .addEventListener('click', () => toggleSidear());

document
  .querySelector('#courses-btn')
  .addEventListener('click', () => toggleCourses());
