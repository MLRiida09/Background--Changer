  const body = document.body;
  const button = document.querySelector('button');
window.addEventListener('DOMContentLoaded', () => {
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  button.addEventListener('click', () => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();

    // change background color
    body.style.background = `linear-gradient(90deg, ${color1}, ${color2})`;

    // change background size and position
    body.style.backgroundSize = "300% 300%";
    body.style.backgroundPosition = "0% 50%";

    // remove and add class to animate gradient
    body.classList.remove('animate-gradient');
    void body.offsetWidth;
    body.classList.add('animate-gradient');
});
});
