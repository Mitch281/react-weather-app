import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useState } from "react";

const SearchWeather = (props) => {
    const [location, setLocation] = useState("");
    const history = useHistory();

    function submitLocation(e) {
        e.preventDefault();

        props.setSettings(location);

        // Like using <Link to=`query=${location}`></Link>
        history.push(`/query=${location}`);
    }

    return (
        <div>
            <form onSubmit={submitLocation}>
                <label htmlFor="location"></label>
                <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
                
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default SearchWeather
