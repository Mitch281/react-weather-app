const FeelsLike = (props) => {
    return (
        <div id="feels-like">
            <span>Feels Like<br /></span>
            <span id="current-temperature">{props.feelsLike}&deg;C</span>
        </div>
    )
}

export default FeelsLike
