import { TodoList, todoLists } from './TodoList';

const navListContainer = document.querySelector('.menu-list');
const newListButton = document.querySelector('.button-add-list');

function renderTodoList(lists = [], container) {
  container.innerHTML = lists
    .map((list, i) => {
      return `<li><a data-index=${i}>${list.title}</a><i data-index=${i} class="fas fa-times"></i></li>`;
    })
    .join('');
}

function addNewTodoList(title = 'Untitled List') {
  const newList = new TodoList(0, title, []);
  todoLists.push(newList);
  // localStorage.setItem('todoLists', JSON.stringify(todoLists));
  renderTodoList(todoLists, navListContainer);
}

function assignTodoListIndex() {
  todoLists.forEach((list, i) => {
    list.id = i;
  });
}

function displayNewTodoList() {
  newListButton.addEventListener('click', () => {
    renderTodoList(todoLists, navListContainer);
    addNewTodoList();
    assignTodoListIndex();
  });
}

export {
  navListContainer,
  renderTodoList,
  addNewTodoList,
  assignTodoListIndex,
  displayNewTodoList,
};
