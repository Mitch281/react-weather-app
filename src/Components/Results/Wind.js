const Wind = (props) => {

    function convertToKmh (speed) {
        const kmh = 3.6 * speed;
        return Math.round(kmh * 10) / 10;
    }

    return (
        <div id="wind-information">
            <p>Wind Speed: {convertToKmh(props.windSpeed)} km/h</p>
            <p>Wind Direction: {props.windDirection}&deg;</p>
        </div>
    )
}

export default Wind
