// import todoLists from './TodoList';

function editTodo() {
  const todos = document.querySelectorAll('.task-item');

  todos.forEach(function (todo) {
    todo.addEventListener('click', function (e) {
      if (e.target.classList.contains('task-star')) {
        toggleStar(e);
      }
      console.log(e);
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

function updateTodoData(e) {}

export { editTodo };
