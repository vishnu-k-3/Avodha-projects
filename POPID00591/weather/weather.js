    const cel = document.querySelector(".celcius")
    const cit = document.querySelector(".location")
    const hum = document.querySelector(".humidity")
    const win = document.querySelector(".wind")

    const search = document.querySelector("#txt")
    const button = document.querySelector("#btn")
    const weatherImg = document.querySelector(".weather-img")
        
        const apiKey = "d4c381957d61453397011c088f51406e"
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

        async function weatherCheck(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            
            if(response.status === 404){
                document.querySelector(".error").style.display = "block"
                document.querySelector(".weather").style.display = "none"
            }else{
                var data = await response.json();

            // console.log(data);
        
            cel.innerHTML = Math.round(data.main.temp) + "°C";
            cit.innerHTML = data.name;
            hum.innerHTML = data.main.humidity;
            win.innerHTML = data.wind.speed + "km/h";
        
            const weatherCondition = data.weather[0].main;
            // console.log("Weather Condition:", weatherCondition);
        
            if (weatherCondition == "Clouds") {
                weatherImg.src = "images/clouds.png";
            } else if (weatherCondition == "Clear") {
                weatherImg.src = "images/clear.png";
            } else if (weatherCondition == "Drizzle") {
                weatherImg.src = "images/drizzle.png";
            } else if (weatherCondition == "Rain") {
                weatherImg.src = "images/rain.png";
            } else if (weatherCondition == "Mist") {
                weatherImg.src = "images/mist.png";
            } else {
                console.log("Unknown weather condition:", weatherCondition);
            }

            document.querySelector(".weather").style.display = "block"
            document.querySelector(".error").style.display = "none"

        }
            }

                
button.addEventListener("click", function(){
    weatherCheck(search.value)
})