const buttonClear = document.querySelector("#button-Clear");
const buttonAdd = document.querySelector("#buttonAdd"); // Botão que adiciona a tarefa
const input = document.querySelector(".input-task"); // Input que a pessoa digita
const htmlList = document.querySelector(".task-list"); // lista de tarefas
const invalidInput = document.querySelector("#todoInput");
let listOfTasks = [];

function addTask() {
  const taskValue = input.value.trim();
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;

  if (
    taskValue.length !== 0 &&
    taskValue.length < 20 &&
    alphanumericRegex.test(taskValue)
  ) {
    listOfTasks.push({ task: taskValue, done: false });
    input.value = "";
    showTask();
    invalidInput.classList.remove("invalid");
    invalidInput.placeholder = "What I have to do?";
  } else {
    input.value = "";
    invalidInput.placeholder = "Invalid Input";
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
              <img src="https://w7.pngwing.com/pngs/442/190/png-transparent-computer-icons-check-mark-others-cdr-angle-text-thumbnail.png" alt="" onclick="markAsCompleted(${index})" />
              <p>${task.task}</p>
              <img src="https://w7.pngwing.com/pngs/723/887/png-transparent-computer-icons-x-mark-check-mark-red-x-miscellaneous-text-trademark-thumbnail.png" alt="" onclick="removeItem(${index})" />
              </li>`;
  });
  htmlList.innerHTML = addOnList;
}

buttonAdd.addEventListener("click", addTask);
buttonClear.addEventListener("click", function () {
  clearTasks();
  input.value = "";
  invalidInput.classList.remove("invalid");
  invalidInput.placeholder = "What I have to do?";
});
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
