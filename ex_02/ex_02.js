const API_URL = "http://localhost:3000/api/v1/todo";
async function getTasks() {
    try {
        const response = await fetch(API_URL);
        console.log(response)
        const tasks = await response.json();
        const taskList = document.querySelector('ul');
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.name;
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            li.appendChild(editButton);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}
const fetchTodo = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()
    console.log(data)
}
document.addEventListener('DOMContentLoaded', fetchTodo);
