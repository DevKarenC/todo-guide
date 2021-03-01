import { TodoList } from './todoList';

export function displayNewTodoList() {
  const navListContainer = document.querySelector('.menu-list');
  const newListButton = document.querySelector('.nav-add-list');

  function handleNewListButton(name = 'Untitled List') {
    const newList = document.createElement('li');
    newList.innerHTML = `<a>${name}</a>`;
    navListContainer.append(newList);
  }

  newListButton.addEventListener('click', () => {
    handleNewListButton();
    addNewTodoList();
  });
}

const todoLists = [];

function addNewTodoList() {
  const newList = new TodoList('Untitled List', []);
  todoLists.push(newList);
  console.log(todoLists);
}
