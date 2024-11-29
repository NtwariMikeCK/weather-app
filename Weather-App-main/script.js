const apiKey = "5e14b4d50630fb643c75e93847a8bd33";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".icon");
const weatherIcon = document.querySelector(".weather-icon");

// async function checkWeather(city) {
//   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//   var data = await response.json();
//   console.log(data);
  
//   // // Update the UI with the weather data
//   document.querySelector(".city").innerHTML = data.name;
//   document.querySelector(".temp1").innerHTML = Math.round(data.main.temp);
//   document.querySelector(".humidity1").innerHTML = data.main.humidity;
//   document.querySelector(".wind1").innerHTML = data.wind.speed;
// }


// function toLower() {
//   searchBox.value = searchBox.value.toLowerCase();
// }
// searchBox.addEventListener("input", toLower)

// // Move the event listener outside of the checkWeather function
// searchBtn.addEventListener("click", () => {
//   checkWeather(searchBox.value);
// });

// change the image

class Weather{
  constructor(city){
    this.city = city;
  }
  async checkWeather(){
    const response = await fetch(apiUrl + this.city + `&appid=${apiKey}`);
    var data = await response.json()
    console.log(data)
    
    // // Update the UI with the weather data
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp1").innerHTML = Math.round(data.main.temp);
    document.querySelector(".humidity1").innerHTML = data.main.humidity;
    document.querySelector(".wind1").innerHTML = data.wind.speed;

    // change the weather icon
    
  }
}

// searchBtn.addEventListener("click", () => {
//   weather(searchBox.value).checkWeather();
// });

searchBtn.addEventListener("click", () => {
  const city = searchBox.value.toLowerCase();  // Get the city from the input
  const weatherInstance = new Weather(city);  // Instantiate the class
  weatherInstance.checkWeather();  // Call the method
});