function handleAddNewTask(todoList, todoTitle) {
  todoList.addTodo(0, todoTitle);
  console.log(todoList);
}

function renderNewTodo(lists = [], container) {
  container.innerHTML = lists
    .map((list) => {
      return `
        <div class="task-item">
          <div class="task-status">
            <input type="checkbox" />
          </div>
          <div class="task-name">${list.title}</div>
          <div class="task-due-date"></div>
          <div class="task-star">&star;</div>
        </div>
      `;
    })
    .join('');
}

export { handleAddNewTask, renderNewTodo };
