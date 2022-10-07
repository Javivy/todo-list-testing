const check = (index) => {
  const todos = JSON.parse(localStorage.getItem('todo-list'));
  todos[index].completed = true;
  localStorage.setItem('todo-list', JSON.stringify(todos));
  return todos;
};

module.exports = check;