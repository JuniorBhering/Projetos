const button = document.querySelector(".button-add-task"); // Botão que adiciona a tarefa
const input = document.querySelector(".input-task"); // Input que a pessoa digita
const htmlList = document.querySelector(".task-list");
let ListOfTasks = [];

function addTask() {
  const taskValue = input.value.trim();
  if (taskValue.length !== 0) {
    ListOfTasks.push(taskValue);
    input.value = "";
    console.log(ListOfTasks);
    showTask();
  } else {
    window.alert("Please enter a valid input");
  }
}

function removeAllTasks() {
  ListOfTasks = [];
}

function removeItem(index) {
  ListOfTasks.splice(index, 1);
  console.log(index);
  showTask();
}

function markAsCompleted(index) {}

function showTask() {
  let addOnList = "";

  ListOfTasks.forEach((task, index) => {
    addOnList =
      addOnList +
      `<li class="task">
            <!--LI é carda elemto da lista-->
            <img src="./img/checked.png" alt="" />
            <p>${task}</p>
            <img src="./img/cancel.png" alt="" onclick="removeItem(${index})" />
            </li>`;
  });
  htmlList.innerHTML = addOnList;
}

button.addEventListener("click", addTask);
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
