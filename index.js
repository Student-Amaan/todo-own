document.addEventListener('DOMContentLoaded', ()=>{
    const inputField = document.getElementById("input-field");
    const addTask = document.getElementById("add-task");
    const ulList = document.getElementById("list-item");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task) => randerTask(task))

    addTask.addEventListener("click", () => {
      const inputText = inputField.value.trim();
      if (inputField === "") return;
      const newtask = {
        id: Date.now(),
        text: inputText,
        completed: false,
      };

      tasks.push(newtask);
      saveTask()
      inputField.value = "";
      console.log(tasks);
    });

    function randerTask(task) {
      let li = document.createElement('li')
      if(task.completed == li.classList.add('completed'))
      li.innerHTML = `<span>${task.id}</span>
      <button>deleted</button>
      `
      ulList.appendChild(li)
      saveTask()

      li.addEventListener('click',(e)=>{
        if(e.target.tagName === "BUTTON" ) return;
        task.completed = !task.completed
        li.classList.toggle('completed')
        saveTask()
      })
    }

    function saveTask() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }


})