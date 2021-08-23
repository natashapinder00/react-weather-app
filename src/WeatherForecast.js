import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    }

    console.log(props);

    if (loaded) { 
        return ( 
                <div className="WeatherForecast">
                     <div className="row"> 
                     <div className="col">
                         <div className="WeatherForecast-day"> Thu </div>
        
         <WeatherIcon code="01d" size={36} />
         <div className="WeatherForecast-temperature">
             <span className="WeatherForecast-temperature-max">19°</span>
              <span className="WeatherForecast-temperature-min">10°</span>
             
 </div>
 </div>
     </div>
        </div>
    );

   

} else { 
    
         let apiKey = "34a5c6ae07d9e697fd2de9c507a9a671";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;  
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&untits=metric`;

axios.get(apiUrl).then(handleResponse);

return null;
 
}
}