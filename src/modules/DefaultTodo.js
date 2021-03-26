import { renderTodoList, addNewTodoList } from './AddTodoList';
import { todoLists } from './TodoList';

const navListContainer = document.querySelector('.menu-list');

function showDefaultTodoLists() {
  renderTodoList(todoLists, navListContainer);
}

export { showDefaultTodoLists };
