const buttonClear = document.querySelector("#button-Clear");
const buttonAdd = document.querySelector("#buttonAdd"); // Botão que adiciona a tarefa
const input = document.querySelector(".input-task"); // Input que a pessoa digita
const htmlList = document.querySelector(".task-list"); // lista de tarefas
const invalidInput = document.querySelector("#todoInput")
let listOfTasks = [];

function addTask() {
  const taskValue = input.value.trim();
  if (taskValue.length !== 0) {
    listOfTasks.push({ task: taskValue, done: false });
    input.value = "";
    showTask();
    invalidInput.classList.remove("invalid");
    invalidInput.placeholder = "What I have to do?";
  } else {
    invalidInput.placeholder = 'Invalid Input'
    invalidInput.classList.add("invalid");
  }
}

function clearTasks() {
  listOfTasks = [];
  showTask();
}

function removeItem(index) {
  listOfTasks.splice(index, 1);
  showTask();
}

function markAsCompleted(index) {
  listOfTasks[index].done = !listOfTasks[index].done;
  showTask();
}

function showTask() {
  let addOnList = "";

  listOfTasks.forEach((task, index) => {
    addOnList += `<li class="task ${task.done ? "done" : ""}">
              <!--LI é cada elemto da lista-->
              <img src="./img/checked.png" alt="" onclick="markAsCompleted(${index})" />
              <p>${task.task}</p>
              <img src="./img/cancel.png" alt="" onclick="removeItem(${index})" />
              </li>`;
  });
  htmlList.innerHTML = addOnList;
}

buttonAdd.addEventListener("click", addTask);
buttonClear.addEventListener("click", clearTasks);
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
