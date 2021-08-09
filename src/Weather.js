import React from "react";
import "./Weather.css";


export default function Weather() {
    return (  
        <div className="Weather">
            <form>
                <div className="row">
                <div className="col-9">

             <input type="search" 
             placeholder="Enter a city..." 
             className="Form-control" 
             autofocus="on"/>

             </div> 
<div className="col-3">
<input type="submit"
value="Search"
className="btn btn-primary w-100"/>
</div>
    </div>    
      
    </form>

<h1>London</h1>
<ul>
<li> Thursday 13:00</li>
<li>Mostly cloudy</li>
</ul>

<div className="row">

    <div className="col-6">
         
        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
         alt="Mostyl cloudy"/>
         

       <span className="temperature">21</span> 
       <span className="unit">°C|F</span>
 </div>
  
    <div className="col-3">
        <ul>
            <li>
                Precipitation: 12%
                </li>
              <li>  
Humidity: 59%
 </li>
 <li>  
Wind: 9 mp/h
 </li>

           
        </ul>
    </div>
     </div>
     
    </div>
  
   

       
    )
}
