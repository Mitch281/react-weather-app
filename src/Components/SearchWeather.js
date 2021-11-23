import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useState } from "react";
import { countryCodes } from "../country-codes.js";

const SearchWeather = (props) => {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const history = useHistory();

    function submitLocation(e) {
        e.preventDefault();

        const countryCode = countryCodes[country];
        if (countryCode === undefined) {
            alert("Not a valid country!");
            return;
        }

        // Like using <Link to=`query=${location}`></Link>
        history.push(`/query=${city}/${country}`);
    }

    return (
        <div>
            <form onSubmit={submitLocation}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />

                <label htmlFor="country">Country</label>
                <input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} />
                
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default SearchWeather
