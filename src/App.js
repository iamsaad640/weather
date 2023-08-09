import { useEffect, useState, useRef } from "react";

import './App.css';

function App() {
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

    // useEffect(() => {
    //     callApi("London");
    // }, []);

    const handleClick = () => {
        callApi(inputRef.current.value);
    }


  return (
    <div className="App">
      <div className="App-header">
        <div className="InputField">
        <input type="text" className="input" placeholder="Enter City to find Weather" ref={inputRef} /></div>
        <button onClick={handleClick}>Search</button>
        <div id="result">
        {data && <>
            <h2>Weather in {data.location.name}</h2>
            <h3 id="IconField"><img className="icon"
                src={data.current.condition.icon}
                alt="weather icon"
            ></img> <p>{data.current.temp_c}°C </p></h3>
            <h4>Feels like: {data.current.feelslike_c}°C</h4>
            <h5>Humidity: {data.current.humidity}</h5>
            <h6>Wind: {data.current.wind_kph}</h6>
            

</>



        }
        
        </div>
        
        </div>
    </div>
  );
}

export default App;
