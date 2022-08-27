// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();


function loadEventListeners() {
      form.addEventListener('submit', addTask);
}


function addTask(e) {
      if(taskInput.value === ''){
            alert('Add a Task');
      };
      // Create li
      const li = document.createElement('li');
      li.className = 'collection-item';
      //Create text node and append to li
      li.appendChild(document.createTextNode(taskInput.value));
      // Create new Link element
      const link = document.createElement('a');
      // Add class
      link.className = 'delete-item secondary-content';
      // Add icon
      link.innerHTML = '<i class="fa fa-remove"></i>';
      li.appendChild(link);
      //Append li to ul
      taskList.appendChild(li);
      // Clear input
      taskInput.value = '';
      console.log(li);
      e.preventDefault();
      
}