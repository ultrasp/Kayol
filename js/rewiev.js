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
