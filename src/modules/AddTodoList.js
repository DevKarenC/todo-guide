import { TodoList, localStorageTodoLists } from './TodoList';
import { assignIndex } from './AddTodo';

const navListContainer = document.querySelector('.menu-list');
const newListButton = document.querySelector('.button-add-list');

function renderTodoList(lists = [], container) {
  assignIndex(lists);
  container.innerHTML = lists
    .map((list) => {
      return `<li><a data-index=${list.id}>${list.title}</a><i data-index=${list.id} class="fas fa-times"></i></li>`;
    })
    .join('');
}

function addNewTodoList(title = 'Untitled List') {
  const newList = new TodoList(0, title, []);
  localStorageTodoLists.push(newList);
  renderTodoList(localStorageTodoLists, navListContainer);
  localStorage.setItem('todoLists', JSON.stringify(localStorageTodoLists));
}

function displayNewTodoList() {
  newListButton.addEventListener('click', () => {
    renderTodoList(localStorageTodoLists, navListContainer);
    addNewTodoList();
  });
}

export { navListContainer, renderTodoList, addNewTodoList, displayNewTodoList };
