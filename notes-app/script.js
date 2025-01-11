const createButton = document.getElementById("create-note")
const notesContainer = document.querySelector(".notes-container")

function create() {
    const div = document.createElement("div")
    const text = document.createElement("p")
    text.setAttribute("contenteditable","true")
    const img = document.createElement("img")
    img.addEventListener("click",deleteNote)
    img.src = "./images/delete.png"
    div.className = "notes"
    text.className = "note"
    div.appendChild(text)
    div.appendChild(img)
    notesContainer.appendChild(div)
    localStorage.setItem("NotesData",notesContainer.innerHTML)
}

function deleteNote(e) {
    console.log(e)
    console.log(e.target.parentNode)
    e.target.parentNode.remove()
    localStorage.setItem("NotesData",notesContainer.innerHTML)
}

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        deleteNote(e)
    }
    else if (e.target.tagName === "P") {
        console.log(e.target)
        if (!e.target.listened) {
            e.target.listened = "true"
            e.target.addEventListener("input", () => {
                localStorage.setItem("NotesData",notesContainer.innerHTML)
            })
        }
    }
})

notesContainer.innerHTML = localStorage.getItem("NotesData")

createButton.addEventListener("click", create)

// vansh4117v