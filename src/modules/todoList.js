class TodoItem {
  constructor(title, dueDate, important, notes) {
    this.title = title;
    this.dueDate = dueDate;
    this.important = important;
    this.notes = notes;
  }
  setTitle(title) {
    this.title = title;
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

export class TodoList {
  constructor(name, todos) {
    this.name = name;
    this.todos = todos;
  }
  addTodo(title) {
    this.todos.push(new TodoItem(title));
    return this.todos;
  }
  deleteTodo(todoIndex) {
    this.todos.splice(todoIndex, 1);
    return this.todos;
  }
}
