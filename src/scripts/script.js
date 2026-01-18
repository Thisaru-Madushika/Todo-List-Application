const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");
const filters = document.querySelectorAll(".filters button");
const taskCount = document.getElementById("taskCount");
const clearCompleted = document.getElementById("clearCompleted");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";