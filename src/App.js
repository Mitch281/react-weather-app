import SearchWeather from "./Components/SearchWeather";
import SearchResults from "./Components/SearchResults";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {

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