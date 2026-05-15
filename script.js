/* =========================
SAGAR EDITZ WEBSITE
ADVANCED SCRIPT
========================= */

console.log(
  "Sagar Editz Website Loaded"
);

/* =========================
SMOOTH SCROLL
========================= */

const links =
document.querySelectorAll(
  '.nav-links a'
);

links.forEach(link => {

  link.addEventListener(
    'click',
    (e)=>{

      const target =
      link.getAttribute('href');

      if(target.startsWith('#')){

        e.preventDefault();

        document
        .querySelector(target)
        .scrollIntoView({
          behavior:'smooth'
        });

      }

  });

});

/* =========================
CARD GLOW EFFECT
========================= */

const cards =
document.querySelectorAll(
  '.card'
);

cards.forEach(card => {

  card.addEventListener(
    'mousemove',
    (e)=>{

      const rect =
      card.getBoundingClientRect();

      const x =
      e.clientX - rect.left;

      const y =
      e.clientY - rect.top;

      card.style.background =
      `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(56,189,248,0.18),
        #132340 60%
      )
      `;

  });

  card.addEventListener(
    'mouseleave',
    ()=>{

      card.style.background =
      '#132340';

  });

});

/* =========================
SCROLL REVEAL
========================= */

const revealElements =
document.querySelectorAll(
  '.hero-text, .hero-image, .card, .category-card, .about-text, .contact-form'
);

const revealOnScroll = () => {

  revealElements.forEach(el => {

    const windowHeight =
    window.innerHeight;

    const revealTop =
    el.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      el.classList.add(
        'active-reveal'
      );

    }

  });

};

window.addEventListener(
  'scroll',
  revealOnScroll
);

revealOnScroll();

/* =========================
IMAGE LOAD EFFECT
========================= */

const images =
document.querySelectorAll(
  'img'
);

images.forEach(img => {

  img.addEventListener(
    'load',
    ()=>{

      img.classList.add(
        'loaded'
      );

  });

});

/* =========================
DOWNLOAD BUTTON EFFECT
========================= */

const buttons =
document.querySelectorAll(
  '.download-btn'
);

buttons.forEach(btn => {

  btn.addEventListener(
    'click',
    ()=>{

      btn.innerHTML =
      'Downloaded ✓';

      setTimeout(()=>{

        btn.innerHTML =
        'Download';

      },2000);

  });

});

/* =========================
CONTACT FORM
========================= */

const form =
document.querySelector(
  '.contact-form'
);

form.addEventListener(
  'submit',
  (e)=>{

    e.preventDefault();

    alert(
      'Message Sent Successfully!'
    );

    form.reset();

});

/* =========================
PARALLAX HERO IMAGE
========================= */

window.addEventListener(
  'scroll',
  ()=>{

    const scrollY =
    window.scrollY;

    const heroImage =
    document.querySelector(
      '.hero-image img'
    );

    heroImage.style.transform =
    `translateY(${scrollY * 0.08}px)`;

});

/* =========================
TYPEWRITER EFFECT
========================= */

const title =
document.querySelector(
  '.hero-text h1'
);

const originalText =
title.innerHTML;

title.innerHTML = '';

let i = 0;

const typeWriter = () => {

  if(i < originalText.length){

    title.innerHTML +=
    originalText.charAt(i);

    i++;

    setTimeout(
      typeWriter,
      35
    );

  }

};

window.addEventListener(
  'load',
  ()=>{

    typeWriter();

});

/* =========================
SCROLL TO TOP BUTTON
========================= */

const scrollBtn =
document.createElement(
  'button'
);

scrollBtn.innerHTML = '↑';

document.body.appendChild(
  scrollBtn
);

scrollBtn.style.position =
'fixed';

scrollBtn.style.bottom =
'20px';

scrollBtn.style.right =
'20px';

scrollBtn.style.padding =
'14px 18px';

scrollBtn.style.border =
'none';

scrollBtn.style.borderRadius =
'50%';

scrollBtn.style.background =
'#38bdf8';

scrollBtn.style.color =
'#041126';

scrollBtn.style.fontSize =
'1.2rem';

scrollBtn.style.cursor =
'pointer';

scrollBtn.style.display =
'none';

scrollBtn.style.zIndex =
'1000';

window.addEventListener(
  'scroll',
  ()=>{

    if(window.scrollY > 300){

      scrollBtn.style.display =
      'block';

    }

    else{

      scrollBtn.style.display =
      'none';

    }

});

scrollBtn.addEventListener(
  'click',
  ()=>{

    window.scrollTo({
      top:0,
      behavior:'smooth'
    });

});

/* =========================
SCROLL PROGRESS BAR
========================= */

const progressBar =
document.createElement(
  'div'
);

document.body.appendChild(
  progressBar
);

progressBar.style.position =
'fixed';

progressBar.style.top = 0;

progressBar.style.left = 0;

progressBar.style.height =
'4px';

progressBar.style.background =
'#38bdf8';

progressBar.style.zIndex =
'2000';

window.addEventListener(
  'scroll',
  ()=>{

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
    progress + '%';

});