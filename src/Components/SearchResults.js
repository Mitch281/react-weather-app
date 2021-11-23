import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const SearchResults = (props) => {
    const { city, country } = useParams();

    const [apiData, setApiData] = useState("");
    const [dataLoaded, setDataLoaded] = useState(false);

    const [feelsLike, setFeelsLike] = useState("");

    function kelvinToCelsius(degrees) {
        const degreesCelsius = degrees - 273.15;

        // Only first decimal place.
        return Math.round(degreesCelsius * 10) / 10
    }

    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await fetch(props.apiUrl);
                const data = await response.json();
                setApiData(data);
            } catch (error) {
                console.log(error);
            }
        }
    
        if (props.apiUrl !== "") {
            console.log("made it");
            fetchWeather();
        }
    }, []);

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

    useEffect(() => {
        if (feelsLike !== "") {
            console.log(feelsLike);
        }
    }, [feelsLike]);

    return (
        <div id="weather">
            <h1>The weather today in {city}, {country}</h1>
            <p>Feels like: {feelsLike}</p>
        </div>
    )
}

export default SearchResults
