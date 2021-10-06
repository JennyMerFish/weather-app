import React, { useState } from 'react'

export default function MainPage() {
    const [cityToSearch, setCityToSearch] = useState("")
    const [weather, setWeather] = useState({})
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityToSearch + "&units=imperial&appid=750ea5847bbdbf22dec14f20d97e9f2e"
    const getWeatherData = async () => {
        const getData = await (await fetch(URL)).json()
        setWeather(getData)
    }
    return (
        <div>
            <input onChange={(e) => setCityToSearch(e.target.value)}type="text" placeholder="City"/>
            <button onClick={() => getWeatherData()}>Search</button>
        </div>
    )
}
