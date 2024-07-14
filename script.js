function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() !== '') {
      const li = document.createElement('li');
      li.textContent = taskInput.value;

      const closeBtn = document.createElement('button');
      closeBtn.textContent = 'Remove';
      closeBtn.className = 'close';
      closeBtn.onclick = function() {
          taskList.removeChild(li);
      };

      li.appendChild(closeBtn);
      taskList.appendChild(li);

      taskInput.value = '';
  }
}

document.getElementById('taskList').addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
      e.target.classList.toggle('completed');
  }
});


