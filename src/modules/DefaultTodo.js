import { renderTodoList, addNewTodoList } from './AddTodoList';
import { todoLists } from './TodoList';

const navListContainer = document.querySelector('.menu-list');

// function addDefaultTodoLists() {
//   addNewTodoList('Algorithms');
//   addNewTodoList('Data Structures');
//   addNewTodoList('Projects');
//   addNewTodoList('Leetcode');
// }

// renderTodoList('Algorithms', navListContainer);
// renderTodoList('Data Structures', navListContainer);
// renderTodoList('Projects', navListContainer);
// renderTodoList('Leetcode', navListContainer);

function showDefaultTodoLists() {
  // addDefaultTodoLists();
  renderTodoList(todoLists, navListContainer);
}

export { showDefaultTodoLists };
