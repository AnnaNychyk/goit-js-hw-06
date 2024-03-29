const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const listOfImagesEl = document.querySelector('.gallery');
// console.log(listImagesEl)

const newStr = image => `<li><img class="gallery-img" src="${image.url}" alt="${image.alt}"></li>`;

const elements = images.map(newStr).join('');

listOfImagesEl.insertAdjacentHTML(
  'afterbegin',
  elements,
);



// const newStr = image => `<li><img class="gallery-img" src="${image.url}" alt="${image.alt}"></li>`;

// // const elements = images.map(newStr).join('');
// const elements = images.reduce((acc, newStr) => {
//   acc += newStr;
//   console.log(acc);
//   console.log(newStr);
//   return acc;

// }, '');

// listOfImagesEl.insertAdjacentHTML(
//   'afterbegin',
//   elements,
// );

