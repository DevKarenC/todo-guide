function editTodo(todosList) {
  const todos = document.querySelectorAll('.task-item');
  todos.forEach(function (todo) {
    todo.addEventListener('click', function (e) {
      const currentTodo = todosList[e.target.dataset.index];
      if (e.target.classList.contains('task-star')) {
        toggleStar(e);
        currentTodo.setImportant();
      } else if (e.target.type === 'checkbox') {
        currentTodo.setStatus();
      } else if (e.target.classList.contains('fa-edit')) {
        // currentTodo.setNotes(e.target.value)
      } else if (e.target.classList.contains('fa-trash-alt')) {
        // todosList.deleteTodo(e.target.dataset.index);
        // console.log(todosList);
      } else {
        console.log(e);
      }
    });
    todo.addEventListener('change', (e) => {
      const currentTodo = todosList[e.target.dataset.index];
      if (e.target.classList.contains('task-name-input')) {
        currentTodo.setTitle(e.target.value);
      } else if (e.target.type === 'date') {
        currentTodo.setDueDate(e.target.value);
        console.log(currentTodo);
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
