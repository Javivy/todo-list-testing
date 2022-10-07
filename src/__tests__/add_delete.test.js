import add from '../__mocks__/add.js';
import displayTask from '../__mocks__/displayTask.js';

beforeAll(() => {
  document.body.innerHTML = `
      <ul class="tasks-list">
      </ul>
    `;
});

describe('Test Add & Remove', () => {
  it('Should add an element to the DOM', () => {
    const taskInfo = add('Hola');
    displayTask(taskInfo);

    const tasks = document.querySelectorAll('.task');
    expect(tasks).toHaveLength(1);
  });
  it('Should add an element to the obj', () => {
    const taskInfo = add('Task 2');
    console.log(taskInfo);

    expect(taskInfo).toHaveLength(2);
  });
});