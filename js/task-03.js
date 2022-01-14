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


const makeListOfImages = ({ url, alt }) => {
  const itemOfImage = document.createElement('li');
  
  const imageEl = document.createElement('img');
  imageEl.classList.add('gallery-img');
  imageEl.src = url;
  imageEl.alt = alt;
 
  itemOfImage.append(imageEl);

  return itemOfImage;

};

const elements = images.map(makeListOfImages);
listOfImagesEl.append(...elements);

// listOfImagesEl.insertAdjacentHTML(
//   'afterbegin',
//   makeListOfImages,
// );