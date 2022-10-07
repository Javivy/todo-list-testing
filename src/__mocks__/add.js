// const displayTask = require('./displayTask.js');
const createObj = require('./object.js');

const obj = [];

const add = (value) => {
  const taskInfo = createObj(value, obj.length);
  obj.push(taskInfo);
  return obj;
};

export default obj;
module.exports = add;