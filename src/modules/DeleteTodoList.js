import { todoLists } from './TodoList';
import { renderTodoList, assignTodoListIndex } from './AddTodoList';

const navListContainer = document.querySelector('.menu-list');

function handleDelete(e) {
  if (e.target.classList.contains('fa-times')) {
    todoLists.splice(e.target.dataset.index, 1);
    renderTodoList(todoLists, navListContainer);
  }
}

function deleteTodoList() {
  navListContainer.addEventListener('click', handleDelete);
}

export { deleteTodoList };
