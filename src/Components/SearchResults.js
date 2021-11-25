import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { config } from "../config.js";
import { countryCodes } from "../country-codes.js";
import Loading from "./Loading.js";
import FeelsLike from "./Results/FeelsLike.js";
import Location from "./Results/Location.js";
import MinTempMaxTemp from './Results/MinTempMaxTemp.js';
import DisplayHumidity from './Results/DisplayHumidity.js';
import Wind from "./Results/Wind.js";
import CloudCover from './Results/CloudCover.js';

const SearchResults = () => {

    const { city, country } = useParams();
    const countryCode = countryCodes[country];

    const apiKey = config.key;

    const [apiUrl, setApiUrl] = useState("");
    const [apiData, setApiData] = useState("");
    const [dataLoaded, setDataLoaded] = useState(false);
    const [dataExists, setDataExists] = useState(true);

    const [feelsLike, setFeelsLike] = useState("");
    const [minTemp, setMinTemp] = useState("");
    const [maxTemp, setMaxTemp] = useState("");
    const [humidity, setHumidity] = useState("");
    const [windSpeed, setWindSpeed] = useState("");
    const [windDirection, setWindDirection] = useState("");
    const [cloudCover, setCloudCover] = useState("");

    useEffect(() => {
        // We have already entered a search. Thus, if we want to enter another search, we must refresh the page.
        if (apiUrl !== "") {
            window.location.reload();
        }
        setDataLoaded(false); // Reset status of data loaded to avoid visual bug.
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
            try {
                setFeelsLike(kelvinToCelsius(apiData.main.feels_like));
                setMinTemp(kelvinToCelsius(apiData.main.temp_min));
                setMaxTemp(kelvinToCelsius(apiData.main.temp_max));
                setHumidity(apiData.main.humidity);
                setWindSpeed(apiData.wind.speed);
                setWindDirection(apiData.wind.deg);
                setCloudCover(apiData.clouds.all);
            } catch (error) {
                console.log(error);
                setDataExists(false);
            }
        }
    }, [dataLoaded]);

    function result() {
        if (dataExists) {
            return (
                <div id="results">
                    <Location city={city} country={country} />
                    <FeelsLike feelsLike={feelsLike} />
                    <MinTempMaxTemp minTemp={minTemp} maxTemp={maxTemp} />
                    <DisplayHumidity humidity={humidity} />
                    <Wind windSpeed={windSpeed} windDirection={windDirection} />
                    <CloudCover cloudCover={cloudCover} />
                </div>
            );
        }
        return (
            <h2>There is no data for this location!</h2>
        );
    }

    return (
        <>
            {dataLoaded ? result() : <Loading />}
        </>
    );
}

export default SearchResults
