const length = document.getElementById("length")
const button = document.getElementById("generate")
const output = document.getElementById("output")
const copy = document.getElementById("copy")
const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+"

function generatePassword() {
    console.log("here")
    const passwordLength = length.value;
    if (!passwordLength) {
        output.innerText = "Please Enter the length of the password";
        output.style.color = "red"
    }
    else {
        let password = "";
        for (let i = 0; i < parseInt(passwordLength); i++) {
            password += characters[Math.floor(Math.random() * characters.length)];
        }
        output.innerText = password;
        output.style.color = "black"
    }
}


button.addEventListener("click", generatePassword)

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(output.innerText)
        .then(() => {
            const copiedMessage = document.getElementById("copied-message");
            copiedMessage.style.opacity = "1";

            setTimeout(() => {
                copiedMessage.style.opacity = "0";
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });

})

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        generatePassword()
    }
})

// vansh4117v