const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// Load saved tasks (or start with an empty array)
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Draw all tasks on the screen
function render() {
  list.innerHTML = "";

  todos.forEach(function (todo) {
    const li = document.createElement("li");
    li.dataset.id = todo.id;
    if (todo.done) li.classList.add("done");

    const span = document.createElement("span");
    span.textContent = todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";

    li.append(span, deleteBtn);
    list.appendChild(li);
  });
}

// Add a new task
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = input.value.trim();
  if (text === "") return;

  todos.push({ id: Date.now(), text: text, done: false });
  input.value = "";
  save();
  render();
});

// Event delegation: one listener for all tasks
list.addEventListener("click", function (event) {
  const li = event.target.closest("li");
  if (!li) return;
  const id = Number(li.dataset.id);

  if (event.target.classList.contains("delete")) {
    todos = todos.filter(function (todo) { return todo.id !== id; });
  } else {
    const todo = todos.find(function (todo) { return todo.id === id; });
    todo.done = !todo.done;
  }

  save();
  render();
});

render();
