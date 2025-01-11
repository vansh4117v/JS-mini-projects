const buttons = document.querySelectorAll('button');
const toastBox = document.querySelector(".toast-box")

const message = {
    Success: `<i class="fa-solid fa-circle-check"></i> Successfully Submitted`,
    Error: `<i class="error fa-solid fa-circle-xmark error"></i> Error Occured`,
    Invalid: `<i style="color: orange;" class="fa-solid fa-circle-exclamation invalid"></i> Invalid input, check again`,
}

function show(e) {
    const toast = document.createElement("div")
    const id = e.target.id
    toast.className = `toast ${id}`;
    toast.innerHTML = message[id]
    toastBox.appendChild(toast)
    setTimeout(() => {
        toast.remove()
    }, 6000)
}

buttons.forEach(button => {
    button.addEventListener('click', show)
})

// vansh4117v