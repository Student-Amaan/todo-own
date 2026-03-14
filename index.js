document.addEventListener('DOMContentLoaded', ()=>{
    const inputField = document.getElementById("input-field");
    const addTask = document.getElementById("add-task");
    const ulList = document.getElementById("list-item");

    let tasks = JSON.parse(localStorage.getItem(task)) || [];

    addTask.addEventListener("click", () => {
      const inputText = inputField.value.trim();
      if (inputField === "") return;
      const newtask = {
        id: Date.now(),
        text: inputText,
        completed: false,
      };

      tasks.push(newtask);
      inputField.value = "";
      console.log(tasks);
    });

    function randerTask(task) {
      console.log(task);
    }

    function saveTask() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }


})