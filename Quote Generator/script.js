const quote = document.querySelector("blockquote")
const author = document.querySelector(".author-name")
const newQuote = document.querySelector("#newQuote")
const tweet = document.querySelector("#tweet")
async function addNewQuote() {
    quote.innerText = "Loading..."
    author.innerText = "Loading..."
    const url = "https://go-quote.azurewebsites.net/random-quote?format=json"
    const res = await fetch(url)
    const response = await res.json()
    quote.innerText = `"${response.text}"`
    author.innerText = response.author
}

newQuote.addEventListener("click", addNewQuote)
tweet.addEventListener("click", () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerText}  - ${author.innerText}`, "_blank")
})

addNewQuote()