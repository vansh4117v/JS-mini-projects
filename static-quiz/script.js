const questionContainer = document.querySelector(".question")
const options = document.querySelector(".options")
const optionsList = options.children;
const button = document.querySelector("button")
let current = -1;
let score = 0;
const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        answer: 1
    },
    {
        question: "What is the capital of Germany?",
        options: ["Munich", "Hamburg", "Cologne", "Berlin"],
        answer: 3
    },
    {
        question: "What is the capital of Italy?",
        options: ["Rome", "Milan", "Turin", "Florence"],
        answer: 0
    },
    {
        question: "What is the capital of Spain?",
        options: ["Barcelona", "Valencia", "Madrid", "Seville"],
        answer: 2
    }
]

function check(e) {
    if (e.target.id != questions[current].answer) {
        e.target.style.backgroundColor = "#ff9c90"
        score--;
    }
    score++;
    const correct = document.getElementById(`${questions[current].answer}`)
    correct.style.backgroundColor = "#9de0ba"
    button.style.display = "block"
    if (current === optionsList.length - 1) {
        button.innerText = "Restart";
        options.style.display = "none"
        current = -1;
        questionContainer.innerText = `You scored ${score} out of ${optionsList.length}`
    }
    for (let i = 0; i < optionsList.length; i++) {
        optionsList[i].removeEventListener("click", check);
        optionsList[i].style.cursor = "not-allowed"
    }
}

function nextQuestion() {
    current++;
    if (current === 0) {
        score = 0;
        options.style.display = "block"
        button.innerText = "Next"
    }
    const nextQuestion = questions[current]
    questionContainer.innerText = nextQuestion.question
    for (let i = 0; i < optionsList.length; i++) {
        optionsList[i].innerText = nextQuestion.options[i];
        optionsList[i].style.cursor = "pointer"
        optionsList[i].style.backgroundColor = "#fff"
        optionsList[i].addEventListener("click", check)
    }
    button.style.display = "none"
}

button.addEventListener("click", nextQuestion)
nextQuestion()

// vansh4117v