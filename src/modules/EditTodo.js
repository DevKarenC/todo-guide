// import todoLists from './TodoList';

function editTodo(todosList) {
  const todos = document.querySelectorAll('.task-item');

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
        // console.log('Todo Clicked');
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

export { editTodo };
