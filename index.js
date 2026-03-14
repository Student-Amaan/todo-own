document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input-field");
  const addTask = document.getElementById("add-task");
  const ulList = document.getElementById("list-item");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => randerTask(task));

  addTask.addEventListener("click", () => {
    const inputText = inputField.value.trim();
    if (inputField === "") return;
    const newtask = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };

    tasks.push(newtask);
    saveTask();
    randerTask(newtask);
    inputField.value = "";
    console.log(tasks);
  });

  function randerTask(task) {
    let li = document.createElement("li");
    li.setAttribute("data_id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `<span>${task.text}</span>
      <button>deleted</button>
      `;
    ulList.appendChild(li);

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTask();
    });
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTask();
    });
  }

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
})
