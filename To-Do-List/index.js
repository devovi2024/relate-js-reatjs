const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (!inputBox.value.trim()) {
        return alert("You must write something!");
    }

    listContainer.innerHTML += `
        <li class="task-item">
            <span class="task-text">${inputBox.value}</span>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">X</button>
        </li>`;
    inputBox.value = ''; // Clear input
    saveData()
}

function deleteTask(button) {
    button.parentElement.remove(); // Remove the task
    saveData()
}

function editTask(button) {
    const taskText = button.parentElement.querySelector('.task-text');
   
    const newText = prompt("Edit your task:", taskText.textContent);
    if (newText?.trim()) taskText.textContent = newText; // Update task text if valid
    saveData()
}


// save data 

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData() {
   listContainer.innerHTML = localStorage.getItem("data")
}

showData()