// Get references to form and task container
const form = document.getElementById('taskForm');
const tasksContainer = document.getElementById('tasksContainer');

// Listen for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const taskTitle = document.getElementById('title').value; // Get the task title
    const taskDescription = document.getElementById('description').value; // Get the task description

    if (taskTitle && taskDescription) {
        // Create a new list item with title and description
        const newTask = document.createElement('li');
        newTask.innerHTML = `<strong>${taskTitle}:</strong>${taskDescription} <button class="deleteBtn">X</button>`;

        // Add the new task to the list
        tasksContainer.appendChild(newTask);

        // Clear the input fields after adding
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
    }
});

// Add event listener to handle delete buttons (delegation)
tasksContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteBtn')) {
        const taskToDelete = event.target.parentElement;
        tasksContainer.removeChild(taskToDelete);
    }
    
});
