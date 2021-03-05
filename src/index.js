import './index.css';
import { showImageOnLoad } from './modules/ShowImageOnLoad';
import { displayDate } from './modules/Date';
// import { displayQuote } from './modules/quote';
import { TodoList } from './modules/TodoList';
import { displayNewTodoList } from './modules/AddTodoList';
import { showDefaultTodoLists } from './modules/DefaultTodo';
import { deleteTodoList } from './modules/DeleteTodoList';
import { displayPage } from './modules/DisplayTodoListPage';

function view() {
  displayDate();
}

view();
showImageOnLoad();
showDefaultTodoLists();
displayNewTodoList();
deleteTodoList();
displayPage();

function displayTask(name) {
  const taskContainer = document.createElement('div');
  const taskStatus = document.createElement('div');
  const taskName = document.createElement('div');
  const taskDueDate = document.createElement('div');
  const taskStar = document.createElement('div');
  const checkbox = document.createElement('input');
  const checkboxState = document.createElement('div');
  const checkboxLabel = document.createElement('label');

  taskStatus.classList.add(
    'task-status',
    'pretty',
    'p-default',
    'p-round',
    'p-fill',
  );
  taskName.classList.add('task-name');
  taskDueDate.classList.add('task-due-date');
  taskStar.classList.add('task-star');
  taskContainer.classList.add('task-item');
  checkboxState.classList.add('state');

  checkbox.type = 'checkbox';
  checkboxState.append(checkboxLabel);
  taskStatus.append(checkbox, checkboxState);
  taskName.textContent = name;

  taskContainer.append(taskStatus, taskName, taskStar);

  return taskContainer;
}
