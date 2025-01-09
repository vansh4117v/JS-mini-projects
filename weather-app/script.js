const button = document.querySelector(".button")
const icon = document.querySelector(".weather-icon")
const temp = document.querySelector(".temp")
console.log(temp)
const cityOutput = document.querySelector(".city")
const cityInput = document.querySelector("#search")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")

function setValues(tempValue = "", humidityValue = "", windValue = "", iconValue = "clear", cityValue = "") {
    temp.innerText = tempValue;
    humidity.innerText = humidityValue;
    wind.innerText = windValue;
    icon.src = `./images/${iconValue}.png`
    icon.alt = iconValue
    cityOutput.innerText = cityValue
}

async function weather() {
    const api = "https://api.openweathermap.org/data/2.5/weather"
    const currentCity = cityInput.value
    if (!currentCity) {
        alert("Please enter city name!!!")
        return
    }
    const appid = "99aeed5aea6132ad22c0e06e973452c7";
    const url = `${api}?q=${currentCity}&appid=${appid}&units=metric`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    cityInput.value = ""
    if (data.cod != 200) {
        if (data.message === "city not found") {
            setValues("City not found")
        }
        else {
            setValues("Some Error occured")
        }
    }
    else {
        setValues(
            tempValue = `${data.main.temp} °C`,
            humidityValue = `${data.main.humidity}%`,
            windValue = `${data.wind.speed}Km/hr`,
            iconValue = `${data.weather[0].main.toLowerCase()}`,
            cityValue = currentCity
        )
    }
}

button.addEventListener("click", weather)
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        weather()
    }
})

weather()

// vansh4117v