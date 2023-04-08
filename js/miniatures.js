import {MadeMainArray} from '/main.js';
const MainArray =Array.from({length:25}, (v,k)=> MadeMainArray (k+1));
const pictureBoxElement = document.querySelector('.pictures');
const miniaturesTemplateElement = document.querySelector('#picture').content.querySelector('.picture');
makePictureBox(MainArray);
function makePictureBox(card) {

  const pictureBoxFragment = document.createDocumentFragment();
  card.forEach(({ url, description, likes, comments }) => {
    const miniaturesElement = miniaturesTemplateElement.cloneNode(true);

    miniaturesElement.querySelector('.picture__img').src = url;
    miniaturesElement.querySelector('.picture__img').alt = description;
    miniaturesElement.querySelector('.picture__likes').textContent = likes;
    miniaturesElement.querySelector('.picture__comments').textContent = comments.length;

    pictureBoxFragment.append(miniaturesElement);

  });
  return pictureBoxElement.append(pictureBoxFragment);
}
