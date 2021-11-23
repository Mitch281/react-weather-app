import SearchWeather from "./Components/SearchWeather";
import SearchResults from "./Components/SearchResults";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  // const [minTemp, setMinTemp] = useState("");
  // const [maxTemp, setMaxTemp] = useState("");
  // const [humidity, setHumidity] = useState("");
  // const [windSpeed, setWindSpeed] = useState("");
  // const [windDirection, setWindDirection] = useState("");

  // function setSettings(city, countryCode) {
  //   setApiUrl(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`);
  // }

  // useEffect(() => {
  //   async function fetchWeather() {
  //     try {
  //       const response = await fetch(apiUrl);
  //       const data = await response.json();
  //       setApiData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   if (apiUrl !== "") {
  //     fetchWeather();
  //   }
  // }, [apiUrl]);

  // useEffect(() => {
  //   console.log(apiData);
  // }, [apiData]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <SearchWeather />
          </Route>
          <Route exact path="/query=:city/:country">
            <SearchWeather />
            <SearchResults />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;