import './index.css';
import { showImageOnLoad } from './modules/ShowImageOnLoad';
import { displayDate } from './modules/Date';
import { displayQuote } from './modules/Quote';
import { displayNewTodoList } from './modules/AddTodoList';
import { showDefaultTodoLists } from './modules/DefaultTodo';
import { deleteTodoList } from './modules/DeleteTodoList';
import { displayPage } from './modules/DisplayTodoListPage';

displayDate();
displayQuote();
showImageOnLoad();
showDefaultTodoLists();
displayNewTodoList();
deleteTodoList();
displayPage();
