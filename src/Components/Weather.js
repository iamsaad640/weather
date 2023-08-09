import { useEffect, useState, useRef } from "react";
import "./weather.css";


function Weather() {
    const api = {
        apiGetway: "http://api.weatherapi.com/v1/",
        apikey: "8ac16d9c31a747dca0a183949231505"
    }

    function callApi(city) {
        fetch(`${api.apiGetway}current.json?key=${api.apikey}&q=${city}`)
            .then(res => res.json())
            .then(result => {
                setData(result);

                console.log(data);
            })
            .catch(err => {
                console.log(err);
            }
            )

    }


    const [data, setData] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        callApi("London");
    }, []);

    const handleClick = () => {
        callApi(inputRef.current.value);
    }



    return <>
        <div className="weather">
        <input type="text" placeholder="Enter City" ref={inputRef} />
        <button onClick={handleClick}>Search</button>
        {data && <>
            <h2>Weather in {data.location.name}</h2>
            <h3>Temperature: {data.current.temp_c}°C</h3>
            <h4>Feels like: {data.current.feelslike_c}°C</h4>
            <h5>Humidity: {data.current.humidity}</h5>
            <h6>Wind: {data.current.wind_kph}</h6>
            <img
                src={data.current.condition.icon}
                alt="weather icon"
            ></img>

</>



        }
        </div>    

    </>
}








export default Weather;
//current.json?key=8ac16d9c31a747dca0a183949231505&q=London