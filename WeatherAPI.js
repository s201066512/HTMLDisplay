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
fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m")
.then (res => res.json()) 
.then(data => {
    let currentTime = data.current_weather.time; // currentTime and currentTemp only visible in the scope within the .then statement
    let currentTemp = data.current_weather.temperature; // for JSON objects I can use .s to navigate the path?
    document.getElementById("TimeHere").innerHTML = "<h4>" + currentTime + "</h4>"; 
    document.getElementById("TempHere").innerHTML = "<h4>" + currentTemp + "</h4>";})
    // saying that the element with id "TimeHere" or "TempHere" will be replaced with currentTime or currentTemp
    // can also specify the size and type of text