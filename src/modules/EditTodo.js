// import todoLists from './TodoList';

function editTodo(todosList) {
  const todos = document.querySelectorAll('.task-item');
  let isDetailShowing = false;

  todos.forEach(function (todo) {
    todo.addEventListener('click', function (e) {
      const currentTodo = todosList[e.target.dataset.index];
      if (e.target.classList.contains('task-star')) {
        toggleStar(e);
        currentTodo.setImportant();
        console.log(todosList);
      } else if (e.target.type === 'checkbox') {
        currentTodo.setStatus();
      } else {
        toggleDetailsCard(isDetailShowing);
        isDetailShowing = !isDetailShowing;
        // editDetails(todo)
      }
    });
  });
}

function toggleStar(e) {
  if (e.target.textContent === '☆') {
    e.target.textContent = '★';
  } else {
    e.target.textContent = '☆';
  }
}

const main = document.querySelector('main');

const taskDetails = document.createElement('div');
const taskDetailsTop = document.createElement('div');
const taskDetailStatus = document.createElement('div');
const taskDetailName = document.createElement('div');
const taskDetailStar = document.createElement('div');
const taskDetailDueDate = document.createElement('div');
const taskDetailNotes = document.createElement('div');
const taskDetailDelete = document.createElement('div');
const divider = document.createElement('hr');
const checkbox = document.createElement('input');
const taskName = document.createElement('input');
const notes = document.createElement('textarea');
const deleteButton = document.createElement('i');
checkbox.type = 'checkbox';
notes.placeholder = 'Notes';
notes.rows = '20';

taskDetails.classList.add('task-details');
taskDetails.append(
  taskDetailsTop,
  divider,
  taskDetailDueDate,
  divider,
  taskDetailNotes,
  taskDetailDelete,
);
taskDetailsTop.classList.add('task-detail-top');
taskDetailStatus.classList.add('task-detail-status');
taskDetailName.classList.add('task-detail-name');
taskDetailStar.classList.add('task-detail-star');
taskDetailDueDate.classList.add('task-detail-due-date');
taskDetailNotes.classList.add('task-detail-notes');
taskDetailDelete.classList.add('task-detail-delete');
notes.classList.add('textarea', 'has-fixed-size');
deleteButton.classList.add('far', 'fa-trash-alt');

taskDetailsTop.append(taskDetailStatus, taskDetailName, taskDetailStar);
taskDetailStatus.append(checkbox);
taskDetailName.append(taskName);
taskDetailNotes.append(notes);
taskDetailDelete.append(deleteButton);

function toggleDetailsCard(isDetailShowing) {
  if (isDetailShowing) {
    main.removeChild(taskDetails);
  } else {
    main.append(taskDetails);
  }
}

function editDetails(todo) {}

export { editTodo };
