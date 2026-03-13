const inputField= document.getElementById("input-field");
const addTask = document.getElementById("add-task");
const ulList = document.getElementById("list-item");

let tasks = []

addTask.addEventListener('click', () => {
    const inputText = inputField.value.trim();
    if(inputField === "") return;
    const newtask = {
        id: Date.now(),
        text: inputText,
        completed: false
    }

    tasks.push(newtask)
    inputField.value = ""
    console.log(tasks)
})

function saveTask(){
    localStorage.setItem()
}

