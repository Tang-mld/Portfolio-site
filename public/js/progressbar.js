/* ####################
    PROGRESSBAR
#####################*/ 

// Utilisation de librairie gsap pour le lancement au onscroll


// Déclancher un élement au scroll sur un element html(tm-compétences)

gsap.registerPlugin(ScrollTrigger);


let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#tm-competences",
      start: "top center",
      toggleActions: "play pause resume none",
      // markers: true,
    }
});


// ProgressBar 1
const progress1 = document.querySelector('.tm-progress-done1');

setTimeout(() => {
  progress1.style.opacity = 1;
  progress1.style.width = progress1.getAttribute('data-done') + '%';
  TweenMax . set ( $ ( '.tm-progress-done1' ,{ display : "none" }));
}, 500);


tl.from(".tm-progress-done1", {opacity: 0, x: -700, duration: 0.1});
tl.to(".tm-progress-done1", {opacity: 1, x: 0});


// ProgressBar 2 
const progress2 = document.querySelector('.tm-progress-done2');

setTimeout(() => {
  progress2.style.opacity = 1;
  progress2.style.width = progress2.getAttribute('data-done') + '%';
  TweenMax . set ( $ ( '.tm-progress-done2' ,{ display : "none" }));
}, 500);

tl.from(".tm-progress-done2", {opacity: 0, x: -700, duration: 0.1});
tl.to(".tm-progress-done2", {opacity: 1, x: 0});


// ProgressBar 3
const progress3 = document.querySelector('.tm-progress-done3');

setTimeout(() => {
  progress3.style.opacity = 1;
  progress3.style.width = progress3.getAttribute('data-done') + '%';
  TweenMax . set ( $ ( '.tm-progress-done3' ,{ display : "none" }));
}, 500);

tl.from(".tm-progress-done3", {opacity: 0, x: -700, duration: 0.1});
tl.to(".tm-progress-done3", {opacity: 1, x: 0});


// ProgressBar 4
const progress4 = document.querySelector('.tm-progress-done4');

setTimeout(() => {
  progress4.style.opacity = 1;
  progress4.style.width = progress4.getAttribute('data-done') + '%';
  TweenMax . set ( $ ( '.tm-progress-done4' ,{ display : "none" }));
}, 500);

tl.from(".tm-progress-done4", {opacity: 0, x: -700, duration: 0.1});
tl.to(".tm-progress-done4", {opacity: 1, x: 0});


// ProgressBar 5
const progress5 = document.querySelector('.tm-progress-done5');

setTimeout(() => {
  progress5.style.opacity = 1;
  progress5.style.width = progress5.getAttribute('data-done') + '%';
  TweenMax . set ( $ ( '.tm-progress-done5' ,{ display : "none" }));
}, 500);

tl.from(".tm-progress-done5", {opacity: 0, x: 700, duration: 0.1});
tl.to(".tm-progress-done5", {opacity: 1, x: 0});


// ProgressBar 6
const progress6 = document.querySelector('.tm-progress-done6');

setTimeout(() => {
  progress6.style.opacity = 1;
  progress6.style.width = progress6.getAttribute('data-done') + '%';
  TweenMax . set ( $ ( '.tm-progress-done6' ,{ display : "none" }));
}, 500);

tl.from(".tm-progress-done6", {opacity: 0, x: 700, duration: 0.1});
tl.to(".tm-progress-done6", {opacity: 1, x: 0});


// ProgressBar 7
const progress7 = document.querySelector('.tm-progress-done7');

setTimeout(() => {
  progress7.style.opacity = 1;
  progress7.style.width = progress7.getAttribute('data-done') + '%';
  TweenMax . set ( $ ( '.tm-progress-done7' ,{ display : "none" }));
}, 500);

tl.from(".tm-progress-done7", {opacity: 0, x: 700, duration: 0.1});
tl.to(".tm-progress-done7", {opacity: 1, x: 0});


// ProgressBar 8
const progress8 = document.querySelector('.tm-progress-done8');

setTimeout(() => {
  progress8.style.opacity = 1;
  progress8.style.width = progress8.getAttribute('data-done') + '%';
  TweenMax . set ( $ ( '.tm-progress-done8' ,{ display : "none" }));
}, 500);

tl.from(".tm-progress-done8", {opacity: 0, x: 700, duration: 0.1});
tl.to(".tm-progress-done8", {opacity: 1, x: 0});


/* ####################
    FIN PROGRESSBAR
#####################*/ 