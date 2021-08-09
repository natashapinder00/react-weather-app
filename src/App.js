import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
    return <div className="App">
        <div className="container">
       
<footer>
 <Weather defaultCity="London" />
This project was coded by{" "} <a href="https://www.linkedin.com/in/natasha-p-9a3621173/" target="_blank">Natasha Pinder</a> and is {" "}
<a href="https://github.com/natashapinder00/react-weather-app"
target="_blank">

open-sourced
</a>
</footer>
</div>
</div>;
}

export default App;

