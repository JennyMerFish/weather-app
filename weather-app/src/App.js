import "./app.css"
import React, { useState } from "react";



function App() {
  const [cityToSearch, setCityToSearch] = useState("")
  const [weather, setWeather] = useState(false)
  
  
  const URL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityToSearch + "&units=imperial&appid=750ea5847bbdbf22dec14f20d97e9f2e"
  const search = evt => {
    if (evt.key === "Enter") {
        fetch(URL)
        .then(res => res.json())
        .then(result => {setCityToSearch(""); setWeather(result)})
    }
}
const fixed = weather?.main?.temp.toFixed(0)


// const background = () => {
//   if (weather?.weather[0]?.main === undefined) {
//     return "app"
//   }
//   else if (weather?.weather[0]?.main === "Cloudy") {
//     return "cloudy"
//   }
//   else if (weather?.weather[0]?.main === "Sunny") {
//     return "sunny"
//   }
// }

  return (
    <div className={weather ? "sunny": "cloudy"}>
      <main>
        <div className="search-box">
            <input onChange={(e) => setCityToSearch(e.target.value)} value={cityToSearch} onKeyPress={search} type="text" placeholder="Search" className="search-bar"/>
            {/* <button onClick={() => getWeatherData()}>Search</button> */}
        </div>
     <div>
     {weather ? <div><h1 className="city">{weather?.name}</h1><h1 className="temp">{fixed}&deg;F</h1> <h1 className="description">{weather?.weather[0]?.main}</h1></div> : <h1>Enter city name for weather</h1>}
     </div>
     </main>
    </div>
  );
}

export default App;
