const categoryEl = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryEl.length}`)

for (let i = 0; i < categoryEl.length; i += 1) { 
const titleOfCategoryEl = categoryEl[i].firstElementChild.textContent;
console.log(`Category: ${titleOfCategoryEl}`)

const elementsOfCategory = categoryEl[i].querySelectorAll('li');
console.log(`Elements: ${elementsOfCategory.length}`)
}
