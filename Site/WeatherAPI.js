/*
middleware functions have (req, res, next) as parameters
not exactly sure how they work  
"res" can be used outside its function as if it's a variable?
fetch is a middleware function which returns a promise(?)
then. statements are used on promises

functions also seem to able to be used as variables depending on how they are constructed?
arrow functions seem a bit confusing right now
especially how they are used here

what is a callback function?

syntax is also qutie different than java
*/

const today = new Date();
const currentTime = document.getElementById("TimeHere");
const dateContainer = document.createElement("div");
dateContainer.style.display = "flex";
dateContainer.style.alignItems = "center";

const year = document.createElement("p");
const month = document.createElement("p");
const day = document.createElement("p");
const hours = document.createElement("p");
const minutes = document.createElement("p");

year.textContent = today.getFullYear();
month.textContent = today.getMonth() + 1;
day.textContent = today.getDay();
hours.textContent = today.getHours();
minutes.textContent = String(today.getMinutes()).padStart(2, '0');

year.style.fontSize = "50px";
month.style.fontSize = "40px";
day.style.fontSize = "30px";
hours.style.fontSize = "25px";
minutes.style.fontSize = "15px";

dateContainer.style.fontFamily = "verdana";
dateContainer.append(year, month, day, hours, minutes);
currentTime.appendChild(dateContainer);

fetch("https://api.open-meteo.com/v1/forecast?latitude=43.904&longitude=-78.977&current_weather=true&hourly=temperature_2m")
.then (res => res.json()) 
.then(data => {
    const currentTemp = data.current_weather.temperature; // for JSON objects I can use . to navigate the path?
    document.getElementById("TempHere").innerHTML = "<h4>" + currentTemp + "°C" + "</h4>";
})
    // saying that the element with id "TimeHere" or "TempHere" will be replaced with currentTime or currentTemp
    // can also specify the size and type of text