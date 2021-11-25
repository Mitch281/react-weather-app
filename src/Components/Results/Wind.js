const Wind = (props) => {
    return (
        <div id="wind-information">
            <p>Wind Speed: {props.windSpeed}</p>
            <p>Wind Direction: {props.windDirection}</p>
        </div>
    )
}

export default Wind
