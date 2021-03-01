import './index.css';
import { displayDate } from './modules/date';
// import { displayQuote } from './modules/quote';
import { TodoList } from './modules/todoList';

function view() {
  displayDate();
  // displayQuote();
  const list = new TodoList('Todo List Sample', []);
  list.addTodo('Big O');
  list.addTodo('Stack');
  list.addTodo('Queue');
  list.addTodo('Binary Search Tree');
  list.deleteTodo(1);
}

view();
