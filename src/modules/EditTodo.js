import { localStorageTodoLists } from './TodoList';

function editTodo(currentTodos) {
  const todos = document.querySelectorAll('.task-item');
  todos.forEach(function (todo) {
    todo.addEventListener('click', function (e) {
      const currentTodo = currentTodos[e.target.dataset.index];
      if (e.target.classList.contains('task-star')) {
        toggleStar(e);
        currentTodo.setImportant();
        localStorage.setItem(
          'todoLists',
          JSON.stringify(localStorageTodoLists),
        );
      } else if (e.target.type === 'checkbox') {
        currentTodo.setStatus();
        localStorage.setItem(
          'todoLists',
          JSON.stringify(localStorageTodoLists),
        );
      } else if (e.target.classList.contains('fa-edit')) {
        toggleModal(currentTodo);
        localStorage.setItem(
          'todoLists',
          JSON.stringify(localStorageTodoLists),
        );
      } else if (e.target.classList.contains('fa-trash-alt')) {
        currentTodos.splice(e.target.dataset.index, 1);
        todo.remove();
        localStorage.setItem(
          'todoLists',
          JSON.stringify(localStorageTodoLists),
        );
      }
    });
    todo.addEventListener('change', (e) => {
      const currentTodo = currentTodos[e.target.dataset.index];
      if (e.target.classList.contains('task-name-input')) {
        currentTodo.setTitle(e.target.value);
        localStorage.setItem(
          'todoLists',
          JSON.stringify(localStorageTodoLists),
        );
      } else if (e.target.type === 'date') {
        currentTodo.setDueDate(e.target.value);
        localStorage.setItem(
          'todoLists',
          JSON.stringify(localStorageTodoLists),
        );
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

function toggleModal(todo) {
  const modal = document.createElement('div');
  modal.classList.add('modal', 'is-active');
  const modalBackground = document.createElement('div');
  modalBackground.classList.add('modal-background');
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  textarea.placeholder = 'Add Notes';
  textarea.value = todo.notes;
  modalContent.append(textarea);
  const modalCloseButton = document.createElement('button');
  modalCloseButton.classList.add('modal-close', 'is-large');
  modal.append(modalBackground, modalContent, modalCloseButton);

  const todoListMain = document.querySelector('.todo-list-main');
  const modalContainer = document.createElement('div');
  modalContainer.append(modal);
  todoListMain.append(modalContainer);

  textarea.addEventListener('change', function () {
    todo.setNotes(this.value);
    localStorage.setItem('todoLists', JSON.stringify(localStorageTodoLists));
  });

  modalCloseButton.addEventListener('click', function () {
    modal.classList.remove('is-active');
  });
}

export { editTodo };
