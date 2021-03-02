import { TodoList, todoLists } from './TodoList';

const navListContainer = document.querySelector('.menu-list');
const newListButton = document.querySelector('.button-add-list');

export function showNewTodoList(name = 'Untitled List') {
  const newList = document.createElement('li');
  newList.innerHTML = `<a>${name}</a><i class="fas fa-times"></i>`;
  navListContainer.append(newList);
}

export function addNewTodoList(name = 'Untitled List') {
  const newList = new TodoList(0, name, []);
  todoLists.push(newList);
  console.log(todoLists);
}

export function assignTodoListIndex() {
  todoLists.forEach((list, i) => {
    list.id = i;
  });
}

export function displayNewTodoList() {
  newListButton.addEventListener('click', () => {
    showNewTodoList();
    addNewTodoList();
    assignTodoListIndex();
  });
}
