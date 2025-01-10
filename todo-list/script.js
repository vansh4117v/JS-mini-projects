const input = document.querySelector("input")
const button = document.querySelector("#add")
const list = document.querySelector("#list")

function addTask() {
    const task = input.value.trim()
    if (!task) return;
    const li = document.createElement("li");
    li.textContent = task;
    input.value = ""
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span)
    list.appendChild(li)
    localStorage.setItem("data", list.innerHTML);

}

button.addEventListener("click", addTask)
list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        localStorage.setItem("data", list.innerHTML);

    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        localStorage.setItem("data", list.innerHTML);

    }
})

list.innerHTML = localStorage.getItem("data")

// vansh4117v