import { localStorageTodoLists } from './TodoList';
import { navListContainer, renderTodoList } from './AddTodoList';

function handleDelete(e) {
  if (e.target.classList.contains('fa-times')) {
    localStorageTodoLists.splice(e.target.dataset.index, 1);
    renderTodoList(localStorageTodoLists, navListContainer);
    localStorage.setItem('todoLists', JSON.stringify(localStorageTodoLists));
  }
}

function deleteTodoList() {
  navListContainer.addEventListener('click', handleDelete);
}

export { deleteTodoList };
