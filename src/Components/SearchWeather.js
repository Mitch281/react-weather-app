import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useState } from "react";

const SearchWeather = () => {
    const [location, setLocation] = useState("");

    return (
        <div>
            <form>
                <label htmlFor="location"></label>
                <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
                
                <Link to={`/location=${location}`}>
                    <input type="submit" value="search" />
                </Link>
            </form>
        </div>
    )
}

export default SearchWeather
