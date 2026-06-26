function addTask() {
  const taskInput = document.getElementById("taskInput");
  const dateInput = document.getElementById("dateInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please enter a task");
    return;
  }

  // Create task box
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  taskDiv.innerHTML = `
    <div class="task-info">
      <div>${taskInput.value}</div>
      <div class="task-date">${dateInput.value || "No date"}</div>
    </div>
    <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>
  `;

  taskList.appendChild(taskDiv);

  // clear inputs
  taskInput.value = "";
  dateInput.value = "";
}