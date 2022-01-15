const inputRef = document.querySelector('#name-input');
const nameTextRef = document.querySelector('#name-output');


function onInputChange() {
    inputRef.value === '' ? nameTextRef.textContent = 'Anonymous' : nameTextRef.textContent = inputRef.value;
}

inputRef.addEventListener('input', onInputChange);
