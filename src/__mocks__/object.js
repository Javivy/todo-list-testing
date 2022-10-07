const createObj = (value, indexPosition) => {
  let tasksObj = {};

  tasksObj = {
    description: value,
    completed: false,
    index: indexPosition,
  };

  return tasksObj;
};

module.exports = createObj;