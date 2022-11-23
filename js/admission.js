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

let myStep = 1;

$('.step1').on('change keyup blur ', () => inputsCheck('.step1'));
$('.step2').on('change keyup blur click', () => inputsCheck2('.step2'));
$('.step3').on('change keyup blur ', () => inputsCheck('.step3'));

function inputsCheck(classname) {
  let isTrue = false;
  document
    .querySelector(classname)
    .querySelectorAll('.input')
    .forEach((x) => {
      if (x?.value?.length > 0) {
        isTrue = false;
        // let cards = document.querySelectorAll('.descs-card');
        // cards.forEach((y) => {
        //   if (y.classList.contains('active') === true) {
        //     isTrue == false;
        //   } else {
        //     isTrue == true;
        //   }
        // });
      } else {
        isTrue = true;
      }
    });

  document.querySelector(classname).querySelector('.next-step').disabled =
    isTrue;
}
function inputsCheck2(classname) {
  let isTrue = false;
  let date = document.querySelector('#date').value.length;
  let time = document.querySelector('#time').value.length;
  let filial = document.querySelector('#filial').value.length;

  if (date > 0 && time > 0 && filial > 0) {
    document.querySelector('#cards-desc').classList.remove('d-none');
  } else return;

  let cards = document.querySelectorAll('.descs-card');
  let hasactive = false;
  cards.forEach((y) => {
    if (y.classList.contains('active') === true) {
      hasactive = true;
    }
  });

  if (date > 0 && time > 0 && filial > 0 && hasactive) {
    isTrue = false;
  } else isTrue = true;

  document.querySelector(classname).querySelector('.next-step').disabled =
    isTrue;
}

function nextStep(step) {
  let progresFath = document.querySelector('.progress-wrapper');
  let progressBar = progresFath.querySelector('.progressbar');
  let progressItems = progresFath.querySelectorAll('.item');

  if (step === myStep) {
    document.querySelectorAll('.step-content').forEach((x) => {
      x.classList.add('step-hidden');
    });
    progressItems.forEach((x) => {
      if (x.classList.contains('active')) {
        x.classList.add('prev-active');
      }
      x.classList.remove('active');
    });

    if (step === 1) {
      progressBar.style.width = '37%';
      progresFath.querySelector('.two').classList.add('active');
      document
        .querySelector(`.step${step + 1}`)
        .classList.remove('step-hidden');
      myStep++;
    } else if (step === 2) {
      document
        .querySelector(`.step${myStep}`)
        .querySelector('.next-step').disabled = false;
      document
        .querySelector(`.step${step + 1}`)
        .classList.remove('step-hidden');
      progressBar.style.width = '63%';
      progresFath.querySelector('.three').classList.add('active');
      myStep++;
    } else if (step === 3) {
      progressBar.style.width = '84%';
      progresFath.querySelector('.four').classList.add('active');
      document
        .querySelector(`.step${step + 1}`)
        .classList.remove('step-hidden');
      myStep++;
    } else if (step === 4) {
      progressBar.style.width = '100%';
      document
        .querySelector(`.step${step + 1}`)
        .classList.remove('step-hidden');
      myStep++;
    }
  } else {
    return alert("Qayta tekshirib ko'ring");
  }
}

let cards = document.querySelectorAll('.descs-card');
cards.forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.descs-card').forEach((a) => {
      a.classList.remove('active');
    });
    alert(item.dataset.number);
    item.classList.add('active');
  });
});

document.querySelectorAll('.myCollapse').forEach((item) => {
  item.querySelector('.header').addEventListener('click', () => {
    document.querySelectorAll('.myCollapse').forEach((x) => {
      x.querySelector('.myCollapse-body').classList.add('visible');
      x.querySelector('.header').querySelector('span').style.transform =
        'rotate(0deg)';
    });
    item.querySelector('.myCollapse-body').classList.remove('visible');
    item.querySelector('.header').querySelector('span').style.transform =
      'rotate(180deg)';
  });
});

document
  .querySelector('.collapse-btn-wrapper')
  .querySelectorAll('.collapse-btn')
  .forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.collapse-btn').forEach((x) => {
        x.classList.add('outlined');
      });
      btn.classList.remove('outlined');

      console.log('bosildi');
    });
  });

function modalShow() {
  document.querySelector('.admission-modal').classList.toggle('show');
}
