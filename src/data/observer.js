let observer;

const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px -50px 0px"
};

window.addEventListener('DOMContentLoaded', () => {
  let targets = document.querySelectorAll('.fade-in, .fade, .fade2, .fade3, .fade4, .fade-down');

  observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Stop watching the current target
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  targets.forEach(target => observer.observe(target));
});
