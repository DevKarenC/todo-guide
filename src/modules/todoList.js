class TodoItem {
  constructor(id, title, status, dueDate, important, notes) {
    this.id = id;
    this.title = title;
    this.status = status;
    this.dueDate = dueDate;
    this.important = important;
    this.notes = notes;
  }
  setId(id) {
    this.id = id;
  }
  setTitle(title) {
    this.title = title;
  }
  setStatus() {
    this.status = !this.status;
  }
  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }
  setImportant() {
    this.important = !this.important;
  }
  setNotes(notes) {
    this.notes = notes;
  }
}

class TodoList {
  constructor(id, title, todos) {
    this.id = id;
    this.title = title;
    this.todos = todos;
  }
  addTodo(
    todoId,
    todoTitle,
    todoStatus,
    todoDueDate,
    todoImportant,
    todoNotes,
  ) {
    this.todos.push(
      new TodoItem(
        todoId,
        todoTitle,
        todoStatus,
        todoDueDate,
        todoImportant,
        todoNotes,
      ),
    );
    return this.todos;
  }
  deleteTodo(todoIndex) {
    this.todos.splice(todoIndex, 1);
    return this.todos;
  }
  renameTodoList(newTitle) {
    this.title = newTitle;
  }
}

const todoLists = [];

export { TodoList, todoLists };
// export const todoLists = JSON.parse(localStorage.getItem('todoLists')) || [];
