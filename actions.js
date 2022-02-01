//Select Elements
const input = document.querySelector("[data-input]");
const btn = document.querySelector("[data-submit]");
const form = document.querySelector("form");
const todoList = document.querySelector("#todo-items");
//Function to add Todos
const addRemoveToDo = () => {
  const newListItem = document.createElement("li");
  const itemText = document.createTextNode(input.value);
  const deleteBtn = document.createElement("button");
  const btnText = document.createTextNode("Delete");
  newListItem.appendChild(itemText);
  deleteBtn.appendChild(btnText);
  newListItem.appendChild(deleteBtn);
  todoList.appendChild(newListItem);
  deleteBtn.classList.add("delete-btn");
  input.value = "";
  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(newListItem);
  });
};
btn.addEventListener("click", (e) => {
  e.preventDefault();
  addRemoveToDo();
});
