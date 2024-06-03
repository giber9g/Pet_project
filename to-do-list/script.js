const addTask = () => {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value;

    if (!task) return;

    const taskList = document.getElementById("taskList");

    const newTask = document.createElement("li");
    newTask.classList.add("task");

    const taskText = document.createElement("li");
    taskText.classList.add("task-text");
    taskText.innerHTML = task;

    newTask.appendChild(taskText);
    taskList.appendChild(newTask);

    taskInput.value = "";
}