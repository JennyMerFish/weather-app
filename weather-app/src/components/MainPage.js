import React, { useState } from 'react'
let renderBender = false
export default function MainPage() {
    const [cityToSearch, setCityToSearch] = useState("")
    const [weather, setWeather] = useState({})
    
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityToSearch + "&units=imperial&appid=750ea5847bbdbf22dec14f20d97e9f2e"
    const getWeatherData = async () => {
        const getData = await (await fetch(URL)).json()
        setWeather(getData)
        let renderBender = true
        console.log(weather)
    }
    return (
        <div>
            <input onChange={(e) => setCityToSearch(e.target.value)}type="text" placeholder="City"/>
            <button onClick={() => getWeatherData()}>Search</button>
            {renderBender ? <h1>Currently in {weather.name} it's {weather.weather[0].description}</h1> : <h1>Enter a city to see the weather</h1>  }
        </div>
    )
}
