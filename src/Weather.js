import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";


export default function Weather(props) {

const [weatherData, setWeatherData] = useState({ ready: false })
;

function handleResponse(response) {  
    console.log(response.data);

setWeatherData({
    
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    precipitation: response.data.main.precipitation,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png", 
    wind: response.data.wind.speed,
    city: response.data.name,
    });
}

if (weatherData.ready) {
        return (  
        <div className="Weather">
            <form>
                <div className="row">
                <div className="col-9">

             <input type="search" 
             placeholder="Enter a city..." 
             className="Form-control" 
             autoFocus="on"/>

             </div> 
<div className="col-3">
<input type="submit"
value="Search"
className="btn btn-primary w-100"/>
</div>
    </div>    
      </form>

<WeatherInfo data={weatherData} />

 </div>
 
    );

} else {

    const apiKey = "d2b8a0db5e85065ca5e0d9c6fb59f04a";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";

}
}