import {
  showNewTodoList,
  addNewTodoList,
  assignTodoListIndex,
} from './AddTodoList';

function addDefaultTodoLists() {
  addNewTodoList('Algorithms');
  addNewTodoList('Data Structures');
  addNewTodoList('Front-end Development');
  addNewTodoList('Leetcode');
}

export function showDefaultTodoLists() {
  showNewTodoList('Algorithms');
  showNewTodoList('Data Structures');
  showNewTodoList('Front-end Development');
  showNewTodoList('Leetcode');
}

addDefaultTodoLists();
assignTodoListIndex();
