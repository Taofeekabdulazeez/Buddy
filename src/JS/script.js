const accordion = document.querySelector('.accordion');
const accordionPanels = document.querySelectorAll('.accordion__panel');

accordion.addEventListener('click', function (event) {
  const clickedPanel = event.target.closest('.accordion__panel');
  if (!clickedPanel) return;

  if (clickedPanel.classList.contains('accordion__panel--active')) {
    clickedPanel.classList.remove('accordion__panel--active');
    return;
  }

  accordionPanels.forEach((panel) =>
    panel.classList.remove('accordion__panel--active')
  );

  clickedPanel.classList.add('accordion__panel--active');
});

const btnNav = document.querySelector('.btn--nav');
const header = document.querySelector('header');
const overlay = document.querySelector('.overlay');

btnNav.addEventListener('click', function () {
  document.body.classList.toggle('open');
});

overlay.addEventListener('click', function () {
  document.body.classList.remove('open');
});

const sections = document.querySelectorAll('section');
const { height: headerHeight } = header.getBoundingClientRect();
const headerObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;

    if (entry.isIntersecting) header.classList.remove('sticky');
    else header.classList.add('sticky');
  },
  { root: null, threshold: 0, rootMargin: `-${headerHeight}px` }
);

headerObserver.observe(sections[0]);

const scaledImages = document.querySelectorAll('.feature__img-box img');

scaledImages.forEach((img) => img.classList.add('scale'));

const imgObserver = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('scale');
    observer.unobserve(entry.target);
  },
  { root: null, threshold: 1 }
);

scaledImages.forEach((img) => imgObserver.observe(img));

const operationEls = document.querySelectorAll('.operations__content');
operationEls.forEach((el) => el.classList.add('active'));

const contentObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) entry.target.classList.add('active');
    if (entry.isIntersecting) entry.target.classList.remove('active');
  },
  { root: null, threshold: 1 }
);

operationEls.forEach((el) => contentObserver.observe(el));
