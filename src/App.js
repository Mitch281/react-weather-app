import SearchWeather from "./Components/SearchWeather";
import SearchResults from "./Components/SearchResults";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const api = {
    key: "43e612fa05ad672380ed13c09b50c2be"
  };

  const [apiUrl, setApiUrl] = useState("");

  function setSettings(city) {
    setApiUrl(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api.key}`);
  }

  useEffect(() => {
    console.log(apiUrl);
  }, [apiUrl]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <SearchWeather setSettings={setSettings} />
          </Route>
          <Route exact path="/query=:location">
            <SearchWeather setSettings={setSettings} />
            <SearchResults />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;