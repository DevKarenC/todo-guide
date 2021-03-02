import { doc } from 'prettier';
import './index.css';
import { displayDate } from './modules/date';
// import { displayQuote } from './modules/quote';
import { TodoList } from './modules/todoList';
import { displayNewTodoList } from './modules/addTodoList';

function view() {
  displayDate();
  // displayQuote();
  const list = new TodoList('Todo List Sample', []);
  list.addTodo('Big O');
  list.addTodo('Stack');
  list.addTodo('Queue');
  list.addTodo('Binary Search Tree');
  list.deleteTodo(1);
}

view();

displayNewTodoList();

function displayTodoList(name) {
  const todoListHeading = document.querySelector('.todo-list-heading');
  const todoListName = document.querySelector('.todo-list-name');
  const todoListProgress = document.querySelector('.todo-list-progress');
  const todoListStars = document.querySelector('.todo-list-stars');
  const todoListTaskContainer = document.querySelector('.task-container');
  todoListName.textContent = name;
  // todoListTaskContainer.append(displayTask('Internet', '50%', '4'));
}

displayTodoList('Algorithms');

function calculateTodoListProgress() {}

function countTodoListStars() {}

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
