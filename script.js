let taskList = [];

document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    let taskInput = document.getElementById('task-input');
    let task = taskInput.value.trim();
    if (task !== '') {
        taskList.push(task);
        displayTasks();
        taskInput.value = '';
    }
}

function displayTasks() {
    let taskListElement = document.getElementById('task-list');
    taskListElement.innerHTML = '';
    taskList.forEach((task, index) => {
        let taskElement = document.createElement('li');
        taskElement.textContent = task;
        taskElement.innerHTML += ` <button class="edit-btn" onclick="editTask(${index})">Edit</button> <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>`;
        taskListElement.appendChild(taskElement);
    });
}

function editTask(index) {
    let task = taskList[index];
    let taskInput = document.getElementById('task-input');
    taskInput.value = task;
    taskInput.focus();
    document.getElementById('add-task-btn').addEventListener('click', () => {
        taskList[index] = taskInput.value.trim();
        displayTasks();
        taskInput.value = '';
    });
}

function deleteTask(index) {
    taskList.splice(index, 1);
    displayTasks();
}

displayTasks();