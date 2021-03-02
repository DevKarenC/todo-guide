class TodoItem {
  constructor(id, title, dueDate, important, notes) {
    this.id = id;
    this.title = title;
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
  constructor(id, name, todos) {
    this.id = id;
    this.name = name;
    this.todos = todos;
  }
  addTodo() {
    this.todos.push(new TodoItem());
    return this.todos;
  }
  deleteTodo(todoIndex) {
    this.todos.splice(todoIndex, 1);
    return this.todos;
  }
  renameTodoList(newName) {
    this.name = newName;
    return this.name;
  }
}

export const todoLists = [];
