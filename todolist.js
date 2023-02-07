const form = document.querySelector('#todo-form');
const taskInput = document.querySelector('#task');
const dateInput = document.querySelector('#date');
const priorityInput = document.querySelector('#priority');
const todoList = document.querySelector('#todo-list tbody');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const task = taskInput.value;
  const date = dateInput.value;
  const priority = priorityInput.value;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${task}</td>
    <td>${date}</td>
    <td>${priority}</td>
  `;

  todoList.appendChild(row);

  taskInput.value = '';
  dateInput.value = '';
  priorityInput.value = 'low';
});
