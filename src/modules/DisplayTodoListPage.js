import { navListContainer } from './AddTodoList';
import { showImageOnLoad } from './ShowImageOnLoad';

const main = document.querySelector('main');

// render the Todo List page
function renderTodoListPage(e) {
  const todoListMain = document.createElement('div');
  const todoListHeading = document.createElement('div');
  const todoListName = document.createElement('div');
  const todoListNameText = document.createElement('p');
  const taskContainer = document.createElement('div');
  const addNewTask = document.createElement('div');
  const button = document.createElement('button');
  const plusSpan = document.createElement('span');
  const textSpan = document.createElement('span');

  todoListNameText.textContent = e.target.textContent;
  plusSpan.textContent = '+';
  textSpan.textContent = 'Add a Task';
  button.append(plusSpan, textSpan);
  addNewTask.append(button);
  todoListName.append(todoListNameText);
  todoListHeading.append(todoListName);
  todoListMain.append(todoListHeading, addNewTask);
  main.append(todoListMain);

  todoListMain.classList.add('todo-list-main');
  todoListHeading.classList.add('todo-list-heading');
  todoListName.classList.add('todo-list-name');
  taskContainer.classList.add('task-container');
  addNewTask.classList.add('add-new-task');
}

function removeTodoListPage() {
  main.querySelectorAll('*').forEach((child) => child.remove());
}

function handleDisplayPage(e) {
  if (e.target.tagName === 'A') {
    removeTodoListPage();
    renderTodoListPage(e);
  } else if (e.target.tagName === 'I') {
    removeTodoListPage();
    showImageOnLoad();
  }
  console.log(e);
}

// when the user clicks on "Algorithms", the Todo List page in the main div should appear
function displayPage() {
  navListContainer.addEventListener('click', handleDisplayPage);
}

export { displayPage };
