import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';



export default function WeatherIcon(props) {
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n" : "CLEAR_NIGHT",
        "02d" : "PARTLY_CLOUDY_DAY",
        "02n" : "PARTLY_CLOUDY_NIGHT",
        "03d" : "PARTLY_CLOUDY_DAY",
        "03n" : "PARTLY_CLOUDY_NIGHT",
"04d" : "CLOUDY",
"04n" : "CLOUDY",
"09d" : "RAIN",
"09n" : "RAIN",
"10d" : "SLEET",
"10n" : "SLEET",
"11d" : "SLEET",
"11n" : "SLEET",
"13d" : "SNOW",
"13n" : "SNOW",
"50d" : "FOG",
"50n" : "FOG"

    };

return (
     <ReactAnimatedWeather
    icon={codeMapping[props.code]}
    color="#1ab5ed"
    size={50}
    animate={true} 
    />
);
}
