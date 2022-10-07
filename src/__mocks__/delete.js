const displayTask = require('./displayTask.js');
let { obj } = require('./add.js');

const deleteItem = (index) => {
  obj = JSON.parse(window.localStorage.getItem('todo-list'));
  obj.splice(index, 1);
  window.localStorage.setItem('todo-list', JSON.stringify(obj));
  const tasksList = document.querySelector('.tasks-list');
  tasksList.innerHTML = '';
  displayTask(obj);

  obj.forEach((task) => {
    task.index = obj.indexOf(task);
    window.localStorage.setItem('todo-list', JSON.stringify(obj));
  });
  return obj;
};

module.exports = deleteItem;