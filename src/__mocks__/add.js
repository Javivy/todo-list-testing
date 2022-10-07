const displayTask = require('./displayTask.js');
const createObj = require('./object.js');

const obj = JSON.parse(window.localStorage.getItem('todo-list')) || [];

const add = (value) => {
  const taskInfo = createObj(value, obj.length);
  obj.push(taskInfo);
  window.localStorage.setItem('todo-list', JSON.stringify(obj));
  displayTask(obj);
  return obj;
};

export default obj;
module.exports = add;