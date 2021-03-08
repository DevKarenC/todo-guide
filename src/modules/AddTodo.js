function renderNewTodo(list = [], container) {
  assignTodoIndex(list);
  container.innerHTML = list
    .map((listElement) => {
      return `
        <div class="task-item" data-index=${listElement.id}>
          <div class="task-status">
            <input type="checkbox" data-index=${listElement.id} ${
        listElement.status ? 'checked' : ''
      }>
          </div>
          <div class="task-name" data-index=${listElement.id}>
            <input class="task-name-input" type="text" data-index=${
              listElement.id
            } value='${listElement.title}' >
          </div>
          <div class="task-due-date" data-index=${listElement.id}>
            <input type="date" data-index=${listElement.id} value=${
        listElement.dueDate
      }>
          </div>
          <div class="task-star" data-index=${listElement.id}>${
        listElement.important ? '★' : '☆'
      }</div>
          <div class="task-notes">
            <i class="far fa-edit" data-index=${listElement.id}></i>
          </div>
          <div class="task-delete">
            <i class="far fa-trash-alt" data-index=${listElement.id}></i>
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
