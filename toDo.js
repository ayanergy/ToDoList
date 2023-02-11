const activeBox = document.querySelector("#activeBox");
const doneBox = document.querySelector("#doneBox");

const taskInput = document.querySelector("#taskInput");
const categoryInput = document.querySelector("#categoryInput");
const deadlineInput = document.querySelector("#deadlineInput");
const effortInput = document.querySelector("#effortInput");
const urgencyInput = document.querySelector("#urgencyInput");

const addTask = document.querySelector("#addTask");
const clearInput = document.querySelector("#inputIcon");
const moveAll = document.querySelector("#activeIcon");
const deleteAll = document.querySelector("#doneIcon");

function gday(deadline) {
  
  const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const date = new Date(deadline);
  let day = weekday[date.getUTCDay()];
  
  return day;
}

function gcolor(urgency) {
  
  let color;
  
  switch (urgency) {
    case "Urgent":
      color = "red";
      break;
    case "Required":
      color = "orange";
      break;
    default:
      color = "green";
  }
  
  return color;
}

function sortTasks() {
  
  const tasks = Array.from(activeBox.children);

  tasks.sort((a, b) => {
    
    const aDeadline = new Date(a.getAttribute("deadlineData"));
    const bDeadline = new Date(b.getAttribute("deadlineData"));
    
    return aDeadline - bDeadline;
  });

  tasks.forEach((task) => {
    
    activeBox.appendChild(task);
  
  });

}

addTask.addEventListener("click", (e) => {
  
  e.preventDefault();
  
  const taskValue = taskInput.value;
  const categoryValue = categoryInput.value;
  const deadlineValue = deadlineInput.value;
  const effortValue = effortInput.value;
  const urgencyValue = urgencyInput.value;

  day = gday(deadlineValue);
  color = gcolor(urgencyValue);

  const tasks = document.createElement("div");
  tasks.classList.add("tasks");
  tasks.setAttribute("deadlineData", deadlineValue);
  tasks.innerHTML = `
    <div class ="task">
      <h2 class = "name">${taskValue}</h2>
      <div class = "metrics">
        <div class = "shape" style="background-color: ${color};">
          <p class = "effort">${effortValue}</p>
        </div>
      </div>
      <div class = "day">
          <p>${day}</p>
      </div>
      <h3 class = "category">${categoryValue}</h3>
    </div>
  `;
  
  tasks.addEventListener("click", () => {
    
    doneBox.appendChild(tasks);
  
  });

  activeBox.appendChild(tasks);

  taskInput.value = "";
  categoryInput.value = "";
  deadlineInput.value = "";
  effortInput.value = "";
  urgencyInput.value = "";

  sortTasks();

});

clearInput.addEventListener("click", (event) => {
  
  taskInput.value = "";
  categoryInput.value = "";
  deadlineInput.value = "";
  effortInput.value = "";
  urgencyInput.value = "";

});

doneBox.addEventListener("click", (event) => {
  
  if (event.target.classList.contains("task")) {
    
    event.target.remove();
  
  }

});

moveAll.addEventListener("click", (e) => {
  
  const activeTasks = activeBox.querySelectorAll(".task");
  
  activeTasks.forEach((task) => {
    
    doneBox.appendChild(task);
  
  });

});

deleteAll.addEventListener("click", () => {
  
  const doneTasks = doneBox.querySelectorAll(".task");
  
  doneTasks.forEach((task) => {
  
    task.remove();
  
  });

});