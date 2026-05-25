const form = document.querySelector(".add-form");
const input = document.getElementById("input");
const listJob = document.getElementById("listJob");
const emptyList = document.getElementById("emptyList");

function addTask(event) {
    event.preventDefault();

    const taskName = input.value.trim();

    if (taskName === "") {
        alert("Vui lòng nhập công việc");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskName;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Xóa";

    deleteBtn.addEventListener("click", function () {
        li.remove();

        if (listJob.children.length === 0) {
            emptyList.style.display = "block";
        }
    });

    li.appendChild(deleteBtn);
    listJob.appendChild(li);

    input.value = "";
    emptyList.style.display = "none";
}

form.addEventListener("submit", addTask);
const form = document.querySelector(".add-form");
const input = document.getElementById("input");
const listJob = document.getElementById("listJob");
const emptyList = document.getElementById("emptyList");

function updateEmptyList() {
    if (listJob.children.length === 0) {
        emptyList.style.display = "block";
    } else {
        emptyList.style.display = "none";
    }
}

function addTask(event) {
    event.preventDefault();

    const taskName = input.value.trim();

    if (taskName === "") {
        alert("Vui lòng nhập công việc");
        return;
    }

    const li = document.createElement("li");
    const taskText = document.createElement("span");
    const deleteBtn = document.createElement("button");

    taskText.textContent = taskName;
    deleteBtn.textContent = "Xóa";
    deleteBtn.type = "button";

    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateEmptyList();
    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    listJob.appendChild(li);

    input.value = "";
    input.focus();
    updateEmptyList();
}

form.addEventListener("submit", addTask);
updateEmptyList();
