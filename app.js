// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// load all event listeners
loadEventListeners();

function loadEventListeners() {
  form.addEventListener("submit", addTask);
  //remove task events
  taskList.addEventListener("click", removeTask);
  // Clear task events
  clearBtn.addEventListener('click', clearTasks);
// Filter task events
  filter.addEventListener('keyup', filterTasks);
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
    // Clear input
    taskInput.value = "";
    console.log(li);
  }
  e.preventDefault();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

function clearTasks(e){
      //Slower
      // taskList.innerHTML = '';
      // Faster 
      while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
      }
      
}

function filterTasks(e){
      const text = e.target.value.toLowerCase();
      console.log(text);
      document.querySelectorAll('.collection-item').forEach( function(task){
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                  task.style.display = 'block';
                  
            }else{
                  task.style.display = 'none';
            }
      }) 
}
