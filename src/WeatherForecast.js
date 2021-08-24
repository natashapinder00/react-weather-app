import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    console.log(props);

    if (loaded) { 
        return ( 
                <div className="WeatherForecast">
                     <div className="row"> 
                     <div className="col">
                         <div className="WeatherForecast-day">{forecast[0].dt}</div>
        
         <WeatherIcon code={forecast[0].weather[0].icon} size={36} />
         <div className="WeatherForecast-temperature">
             <span className="WeatherForecast-temperature-max">{forecast[0].temp.max}°</span>
              <span className="WeatherForecast-temperature-min">{forecast[0].temp.min}°</span>
             
 </div>
 </div>
     </div>
        </div>
    );

} else { 
    
    let apiKey = "30d43a24fd1c789e7aa41dc8c88143f5";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;  
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&untits=metric`;

axios.get(apiUrl).then(handleResponse);

return null;
 
}
}