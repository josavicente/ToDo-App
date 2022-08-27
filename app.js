// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// load all event listeners
loadEventListeners();

function loadEventListeners() {

      // Dom load event
      document.addEventListener('DOMContentLoaded', getTasks);
      form.addEventListener("submit", addTask);
      //remove task events
      taskList.addEventListener("click", removeTask);
      // Clear task events
      clearBtn.addEventListener("click", clearTasks);
      // Filter task events
      filter.addEventListener("keyup", filterTasks);

}

// Get tasks from LS

function getTasks() {
      let tasks;

      if (localStorage.getItem('tasks') === null) {
            tasks = [];
      }else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
      };

      tasks.forEach( (task) => {
            const li = document.createElement("li");
            li.className = "collection-item";
            //Create text node and append to li
            li.appendChild(document.createTextNode(task));
            // Create new Link element
            const link = document.createElement("a");
            // Add class
            link.className = "delete-item secondary-content";
            // Add icon
            link.innerHTML = '<i class="fa fa-remove"></i>';
            li.appendChild(link);
            //Append li to ul
            taskList.appendChild(li);
      });
}
function addTask(e) {
      if (taskInput.value === "") {
            alert("Add a Task");
      } else {
            // Create li
            const li = document.createElement("li");
            li.className = "collection-item";
            //Create text node and append to li
            li.appendChild(document.createTextNode(taskInput.value));
            // Create new Link element
            const link = document.createElement("a");
            // Add class
            link.className = "delete-item secondary-content";
            // Add icon
            link.innerHTML = '<i class="fa fa-remove"></i>';
            li.appendChild(link);
            //Append li to ul
            taskList.appendChild(li);
            // Storte in local storage
            storeTaskInLocalStorage(taskInput.value);
            // Clear input
            taskInput.value = "";
            
      }
      e.preventDefault();
}

function storeTaskInLocalStorage(task) {
      let tasks;

      if (localStorage.getItem('tasks') === null) {
            tasks = [];
      }else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
      };
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e) {
      if (e.target.parentElement.classList.contains("delete-item")) {
            if (confirm("Are you sure?")) {
                  e.target.parentElement.parentElement.remove();
                  // Remove from LS
                  removeTaskFromLocalStorage(e.target.parentElement.parentElement);
            }
      }
}

function removeTaskFromLocalStorage(taskItem){

      let tasks;

      if (localStorage.getItem('tasks') === null) {
            tasks = [];
      }else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
      };

      tasks.forEach(function(task, index)  {
            if (taskItem.textContent === task) {
                  tasks.splice(index, 1);
            }
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
}
function clearTasks(e) {
      //Slower
      // taskList.innerHTML = '';
      // Faster
      while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
      }
      clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage () {
      localStorage.clear();
}

function filterTasks(e) {
      const text = e.target.value.toLowerCase();
      console.log(text);
      document.querySelectorAll(".collection-item").forEach(function (task) {
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                  task.style.display = "block";
            } else {
                  task.style.display = "none";
            }
      });
}
