const categoryEl = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryEl.length}`)

for (let i = 0; i < categoryEl.length; i += 1) {
const titleOfCategoryEl = categoryEl[i].firstElementChild.textContent;
console.log(`Category: ${titleOfCategoryEl}`)

const elementsOfCategory = categoryEl[i].querySelectorAll('li');
console.log(`Elements: ${elementsOfCategory.length}`)
}

// const allCategories = document.querySelectorAll (`ul#categories li.item`);
// const numberOfCategories = allCategories.length;
// console.log (`Number of categories: ${numberOfCategories}`);
// for (let i = 0; i < numberOfCategories; i += 1) {
//     const headText = allCategories[i].firstElementChild.textContent;
//     console.log (`Category: ${headText}`);
// const elementsEl = allCategories[i].lastElementChild;
// const numberOfElements = elementsEl.querySelectorAll(`li`);
// console.log (`Elements: ${numberOfElements.length}`)
// }