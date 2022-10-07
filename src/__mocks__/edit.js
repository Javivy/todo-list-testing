const displayTask = require('./displayTask.js');

const edit = (value, index) => {
  const todos = JSON.parse(window.localStorage.getItem('todo-list'));
  todos[index].description = value;
  window.localStorage.setItem('todo-list', JSON.stringify(todos));
  const tasksList = document.querySelector('.tasks-list');
  tasksList.innerHTML = '';
  displayTask(todos);
  return todos;
};

module.exports = edit;