import { doc } from 'prettier';
import todoListImage from '../assets/images/undraw_working.svg';

function showImageOnLoad() {
  const main = document.querySelector('main');
  const imgWrapper = document.createElement('div');
  const imgText = document.createElement('p');
  const img = document.createElement('img');
  imgWrapper.classList.add('main-image-wrapper');
  img.src = todoListImage;
  img.alt = 'Todo list';
  imgText.textContent = `Start adding todos! Using a todo list is a great way to get things done.`;
  imgWrapper.append(img, imgText);
  main.append(imgWrapper);
}

export { showImageOnLoad };
