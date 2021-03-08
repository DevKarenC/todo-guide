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
          <div class="task-name" data-index=${i}>
            <input class="task-name-input" type="text" data-index=${i} value='${
        listElement.title
      }' >
          </div>
          <div class="task-due-date" data-index=${i}>
            <input type="date" data-index=${i} value=${listElement.dueDate}>
          </div>
          <div class="task-star" data-index=${i}>${
        listElement.important ? '★' : '☆'
      }</div>
          <div class="task-notes">
            <i class="far fa-edit" data-index=${i}></i>
          </div>
          <div class="task-delete">
            <i class="far fa-trash-alt" data-index=${i}></i>
          </div>
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
