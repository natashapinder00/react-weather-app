import React from "react";
import "./Weather.css";


export default function Weather() {
    return (  
        <div className="Weather">
<h1>London</h1>
<ul>
<li> Thursday 13:00</li>
<li>Mostly cloudy</li>
</ul>
<div className="row">
    <div className="col-6">
        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostyl cloudy"/>
        21°C°F
    </div>
    <div className="col-6">
        <ul>
            <li>
                Precipitation: 12%
                </li>
              <li>  
Humidity: 59%
 </li>
 <li>  
Wind: 9 mph
 </li>

           
        </ul>
    </div>
</div>



        </div>
    )
}