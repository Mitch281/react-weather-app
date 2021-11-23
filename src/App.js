import SearchWeather from "./Components/SearchWeather";
import SearchResults from "./Components/SearchResults";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useEffect, useState } from "react";
import { config } from "./config.js";

function App() {
  const apiKey = config.key;

  const [apiUrl, setApiUrl] = useState("");
  const [apiData, setApiData] = useState("");

  const [feelsLike, setFeelsLike] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [windDirection, setWindDirection] = useState("");

  function setSettings(city, countryCode) {
    setApiUrl(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`);
  }

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.log(error);
      }
    }

    if (apiUrl !== "") {
      fetchWeather();
    }
  }, [apiUrl]);

  useEffect(() => {
    console.log(apiData);
  }, [apiData]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <SearchWeather setSettings={setSettings} />
          </Route>
          <Route exact path="/query=:city/:country">
            <SearchWeather setSettings={setSettings} />
            <SearchResults />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;