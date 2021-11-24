import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { config } from "../config.js";
import { countryCodes } from "../country-codes.js";
import Loading from "./Loading.js";
import FeelsLike from "./Results/FeelsLike.js";
import Location from "./Results/Location.js";
import MinTempMaxTemp from './Results/MinTempMaxTemp.js';

const SearchResults = () => {

    const { city, country } = useParams();
    const countryCode = countryCodes[country];

    const apiKey = config.key;

    const [apiUrl, setApiUrl] = useState("");
    const [apiData, setApiData] = useState("");
    const [dataLoaded, setDataLoaded] = useState(false);

    const [feelsLike, setFeelsLike] = useState("");
    const [minTemp, setMinTemp] = useState("");
    const [maxTemp, setMaxTemp] = useState("");

    useEffect(() => {
        if (apiUrl !== "") {
            window.location.reload();
        }
        setApiUrl(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`);
    }, [city]);

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
            setMinTemp(kelvinToCelsius(apiData.main.temp_min));
            setMaxTemp(kelvinToCelsius(apiData.main.temp_max));
        }
    }, [dataLoaded]);

    function result() {
        return (
            <div id="results">
                <Location city={city} country={country} />
                <FeelsLike feelsLike={feelsLike} />
                <MinTempMaxTemp minTemp={minTemp} maxTemp={maxTemp} />
            </div>
        );
    }

    return (
        <>
            {dataLoaded ? result() : <Loading />}
        </>
    );
}

export default SearchResults
