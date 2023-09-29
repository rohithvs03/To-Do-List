let inputBox = document.getElementById("inputBox");
let addBtn = document.getElementById("addBtn");
let listContainer = document.getElementById("listContainer");

listContainer.innerHTML = localStorage.getItem("todo-list");

function addTask() {
    if (inputBox.value == '') {
        alert('Invalid text :(\nPlease write something to ADD!');
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("todo-list", listContainer.innerHTML);
}
