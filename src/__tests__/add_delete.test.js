import add from '../__mocks__/add.js';
import deleteItem from '../__mocks__/delete.js';
import edit from '../__mocks__/edit.js';
import clear from '../__mocks__/clearAllCompleted.js';
// import displayTask from '../__mocks__/displayTask.js';

beforeAll(() => {
  document.body.innerHTML = `
      <ul class="tasks-list">
      </ul>
    `;
});

describe('Test Add & Remove', () => {
  it('Should add an element to the DOM', () => {
    add('Hola');

    const tasks = document.querySelectorAll('.task');
    expect(tasks).toHaveLength(1);
  });

  it('Should add an element to the obj', () => {
    const taskInfo = add('Task 2');

    expect(taskInfo).toHaveLength(2);
  });

  it('Should delete an element from the localStorage', () => {
    add('Task 3');

    // Delete the last task that we added
    deleteItem(2);

    expect(JSON.parse(localStorage.getItem('todo-list'))).toHaveLength(2);
  });

  it('Should delete an element from the DOM', () => {
    const tasks = document.querySelectorAll('.task');
    add('Task 4');
    deleteItem(3);

    expect(tasks).toHaveLength(2);
  });
});

describe('Test the edit and clearALlCompleted functions', () => {
  test('It should edit the description of the obj', () => {
    add('task 5');
    let todos = JSON.parse(localStorage.getItem('todo-list'));

    todos = edit('Hola amigo', 3);
    expect(todos[3].description).toBe('Hola amigo');
  });

  test('It should edit the description of the DOM', () => {
    add('task 5');
    let todos = JSON.parse(localStorage.getItem('todo-list'));
    const task = document.getElementById('description-3');

    todos = edit('Hola amigo', 3);
    expect(task.value).toBe(todos[3].description);
  });

  test('It should clear all the completed Tasks', () => {
    const clearTasks = clear();
    let isTrue = true;
    clearTasks.map((task) => {
      if (task.completed === false) {
        isTrue = true;
      } else {
        isTrue = false;
      }
      return isTrue;
    });
    expect(isTrue).toBe(true);
  });
});