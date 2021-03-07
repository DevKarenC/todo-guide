import './index.css';
import { showImageOnLoad } from './modules/ShowImageOnLoad';
import { displayDate } from './modules/Date';
// import { displayQuote } from './modules/quote';
import { displayNewTodoList } from './modules/AddTodoList';
import { showDefaultTodoLists } from './modules/DefaultTodo';
import { deleteTodoList } from './modules/DeleteTodoList';
import { displayPage } from './modules/DisplayTodoListPage';

displayDate();
showImageOnLoad();
showDefaultTodoLists();
displayNewTodoList();
deleteTodoList();
displayPage();
