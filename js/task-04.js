const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');

// console.log(decrementBtn)
// console.log(counterValue)
// console.log(incrementBtn)

counterValue.currentTarget = 0;
console.log(counterValue)


decrementBtn.addEventListener('click', event => {
    console.log('Клик по кнопке "-1"');
    counterValue.currentTarget -= 1;
})

incrementBtn.addEventListener('click', event => {
    console.log('Клик по кнопке "+1"');
    counterValue.currentTarget += 1;
})




// addListenerBtn.addEventListener('click', event => {
//   console.log(event);
//   console.log('Вешаю слушателя события на целевую кнопку');

//   targetBtn.addEventListener('click', onTargetBtnClick);
// });

// removeListenerBtn.addEventListener('click', event => {
//   console.log(event);
//   console.log('Снимаю слушателя события с целевой кнопки');

//   targetBtn.removeEventListener('click', onTargetBtnClick);
// });

// function onTargetBtnClick(event) {
//   console.log(event);
//   console.log('Клик по целевой кнопке');
// }
