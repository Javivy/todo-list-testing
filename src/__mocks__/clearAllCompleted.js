const check = require('./check.js');
const displayTask = require('./displayTask.js');

const clear = () => {
  let todos = JSON.parse(localStorage.getItem('todo-list'));
  check(0);
  check(1);
  todos = todos.filter((todo) => todo.completed === false);
  localStorage.setItem('todo-list', JSON.stringify(todos));
  displayTask(todos);
  return todos;
};

module.exports = clear;