const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Load tasks from local storage and add them to the list
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
savedTasks.forEach((task) => addTask(task.text, task.completed));

// Event listener for adding a new task
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTask(taskText, false);
    taskInput.value = "";
  }
});

function addTask(text, completed) {
  // Create task item and set text
  const taskItem = document.createElement("li");
  const taskText = document.createElement("span");

  taskText.textContent = text;
  taskText.textContent = `${text}`;
  taskItem.appendChild(taskText);
  if (completed) {
    taskItem.classList.add("completed");
  }

  // Create and add "Complete" button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
    saveTasks();
  });
  taskItem.appendChild(completeBtn);
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
    const newText = prompt("Enter new task text:", text);
    if (newText) {
      taskText.textContent = newText;
      savedTasks();
    }
  });
  taskItem.appendChild(editBtn);

  // Create and add "Delete" button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    taskItem.remove();
    saveTasks();
  });
  taskItem.appendChild(deleteBtn);

  // Append task item to list

  // Save updated tasks to local storage

  // Mark as completed if applicable

  // Mark as completed if applicable

  // Create and add "Complete" button

  // Create and add "Edit" button

  // Add logic for editing a task

  // Create and add "Delete" button

  // Append buttons to task item and task item to list

  taskList.appendChild(taskItem);

  // Save updated tasks to local storage
  saveTasks();
}

function saveTasks() {
  const tasks = Array.from(taskList.children).map((task) => ({
    text: task.querySelector("span").textContent, // Extract task text
    completed: task.classList.contains("completed") // Check if task is completed
  }));
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Save to local storage
}

    
        
