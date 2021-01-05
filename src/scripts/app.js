$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );
//Intersection observer
const ratio = .2;
const opt = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}
const crossing = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.intersectionRatio > ratio) {
      entry.target.classList.add('showEl');
      observer.unobserve(entry.target);
    }
  });
}
const crossingObserver = new IntersectionObserver(crossing, opt);
let elements = document.querySelectorAll('.element');
elements.forEach(el => crossingObserver.observe(el));

