import { TodoList, todoLists } from './TodoList';

const navListContainer = document.querySelector('.menu-list');
const newListButton = document.querySelector('.button-add-list');

export function renderTodoList(lists = [], container) {
  container.innerHTML = lists
    .map((list, i) => {
      return `<li><a data-index=${i}>${list.title}</a><i class="fas fa-times"></i></li>`;
    })
    .join('');
}

export function addNewTodoList(title = 'Untitled List') {
  const newList = new TodoList(0, title, []);
  todoLists.push(newList);
  // localStorage.setItem('todoLists', JSON.stringify(todoLists));
  renderTodoList(todoLists, navListContainer);
  console.log(todoLists);
}

export function assignTodoListIndex() {
  todoLists.forEach((list, i) => {
    list.id = i;
  });
}

export function displayNewTodoList() {
  newListButton.addEventListener('click', () => {
    renderTodoList(todoLists, navListContainer);
    addNewTodoList();
    assignTodoListIndex();
  });
}
