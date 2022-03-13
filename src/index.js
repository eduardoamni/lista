import './assets/css/styles.css';

import { crearTodoHtml } from './assets/js/componentes';
import { Todo, TodoList } from './classes';

export const todoList = new TodoList();

todoList.todos.forEach( todo => {
    crearTodoHtml( todo );
});

//la linea anterior también se puede poner así ya que solo tiene un argumento
// todoList.todos.forEach( crearTodoHtml );

console.log( todoList );