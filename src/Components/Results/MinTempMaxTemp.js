const MinTempMaxTemp = (props) => {
    return (
        <div id="extremes">
            <div>
                <span class="max-temp">High</span>
                <span>/</span>
                <span class="min-temp">Low</span>
            </div>
            <div>
                <span class="max-temp">{props.maxTemp}</span>
                <span>/</span>
                <span class="min-temp">{props.minTemp}</span>
            </div>
        </div>
    )
}

export default MinTempMaxTemp
