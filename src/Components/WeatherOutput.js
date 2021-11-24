const WeatherOutput = (props) => {
    return (
        <div id="weather">
            <h1>The weather today in {props.city}, {props.country}</h1>
            <p>Feels like: {props.feelsLike}</p>
        </div>
    )
}

export default WeatherOutput
