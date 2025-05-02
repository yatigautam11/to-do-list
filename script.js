const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add new task
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.className = 'task-item';
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  // Mark task as completed on click
  li.querySelector('span').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete task
  li.querySelector('.delete-btn').addEventListener('click', () => {
    taskList.removeChild(li);
  });

  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';
});

// Allow pressing Enter to add task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});
