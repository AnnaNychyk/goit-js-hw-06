function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const textColorChange = document.querySelector('.color');

function onClick() { 
  textColorChange.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}

btnChangeColor.addEventListener('click', onClick);
