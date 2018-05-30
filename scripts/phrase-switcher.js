// Phrase switcher

let animationEnd = (function(el) {
  let animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  for (let t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement('div'));

const refreshRate = 3000;

const nextPhrase = (data) => {
  let current = data.shift();
  data.push(current);
  return current;
};

const switchPhrase = (newPhrase) => {
  title.addClass('animated ' + 'fadeOut').one(animationEnd, () => {
    title.removeClass('animated ' + 'fadeOut');
    title.text(newPhrase);
    title.addClass('animated ' + 'fadeIn').one(animationEnd, () => {
      title.removeClass('animated ' + 'fadeIn');
    });
  });
};

let title = $('#main-subtitle');
let phrases = ["Sitting has become the smoking of our generation",
               "Follow your dreams",
               "Ideas Worth Spreading"];

window.setInterval(() => {
  switchPhrase(nextPhrase(phrases));
}, refreshRate);









