function renderNewTodo(list = [], container) {
  container.innerHTML = list
    .map((listElement, i) => {
      return `
        <div class="task-item" data-index=${i}>
          <div class="task-status">
            <input type="checkbox" data-index=${i} ${
        listElement.status ? 'checked' : ''
      }>
          </div>
          <div class="task-name" data-index=${i}>${listElement.title}</div>
          <div class="task-due-date" data-index=${i}></div>
          <div class="task-star" data-index=${i}>${
        listElement.important ? '★' : '☆'
      }</div>
        </div>
      `;
    })
    .join('');
}

function assignTodoIndex(todos) {
  todos.forEach((todo, i) => {
    todo.id = i;
  });
}

export { renderNewTodo, assignTodoIndex };
