const input = document.querySelector('#name-input');
const nameText = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);


function onInputChange(event) {
    nameText.textContent = event.currentTarget.value;
    console.log(nameText)
}

// function onLicenseChange(event) {
//   refs.btn.disabled = !event.currentTarget.checked;
// }