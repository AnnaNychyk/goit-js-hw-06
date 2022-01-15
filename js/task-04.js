const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');

// console.log(decrementBtn)
// console.log(counterValue)
// console.log(incrementBtn)


let counterValueText = 0;
// console.log(counterValue)


decrementBtn.addEventListener('click', event => {
    console.log('Клик по кнопке "-1"');
    counterValueText -= 1;
    counterValue.textContent = counterValueText;
})

incrementBtn.addEventListener('click', event => {
    console.log('Клик по кнопке "+1"');
    counterValueText += 1;
    counterValue.textContent = counterValueText;
})

