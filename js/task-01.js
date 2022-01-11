// Number of categories: 3

// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >) 
// и количество элементов в категории(всех вложенных в него < li >).

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const NumberOfCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${NumberOfCategories.length}`)

const categories = document.querySelector('h2');
console.log(categories.textContent)

const makeColorPickerOptions = options => {
  return options.map(option => {
    const buttonEl = document.createElement('button');
    buttonEl.type = 'button';
    buttonEl.classList.add('color-picker__option');
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;

    return buttonEl;
  });
};
