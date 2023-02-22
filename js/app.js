$(document).foundation()
const getStartedBtn = document.querySelector('.get-started-btn');
getStartedBtn.addEventListener('click', () => {
  const aboutSection = document.querySelector('#about');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});