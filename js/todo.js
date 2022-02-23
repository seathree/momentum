const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let todos = [];
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  li.remove();
  saveTodos();
}

function paintTodo(newTodo) {
  const liTodo = document.createElement("li");
  liTodo.id = newTodo.id;
  const spanTodo = document.createElement("span");
  spanTodo.innerText = newTodo.text;
  const buttonTodo = document.createElement("button");
  buttonTodo.innerText = "❌";
  buttonTodo.addEventListener("click", deleteTodo);
  liTodo.appendChild(spanTodo);
  liTodo.appendChild(buttonTodo);
  todoList.appendChild(liTodo);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}

function sexyFilter() {}
