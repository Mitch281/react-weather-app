import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { config } from "../config.js";
import { countryCodes } from "../country-codes.js";
import WeatherOutput from './WeatherOutput.js';
import Loading from "./Loading.js";

const SearchResults = () => {
    const { city, country } = useParams();
    const countryCode = countryCodes[country];

    const apiKey = config.key;

    const [apiUrl, setApiUrl] = useState("");
    const [apiData, setApiData] = useState("");
    const [dataLoaded, setDataLoaded] = useState(false);

    const [feelsLike, setFeelsLike] = useState("");

    useEffect(() => {
        setApiUrl(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`);
    }, []);

    function kelvinToCelsius(degrees) {
        const degreesCelsius = degrees - 273.15;

        // Only first decimal place.
        return Math.round(degreesCelsius * 10) / 10
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
        if (apiData !== "") {
            setDataLoaded(true);
        }
    }, [apiData]);

    useEffect(() => {
        if (dataLoaded) {
            setFeelsLike(kelvinToCelsius(apiData.main.feels_like));
        }
    }, [dataLoaded]);

    return (
        <div id="result">
            {dataLoaded ? <WeatherOutput city={city} country={country} feelsLike={feelsLike} /> : <Loading />}
        </div>
    )
}

export default SearchResults
