const MinTempMaxTemp = (props) => {
    return (
        <div id="extremes">
            <div>
                <span className="max-temp">High</span>
                <span>&nbsp;/&nbsp;</span>
                <span className="min-temp">Low</span>
            </div>
            <div>
                <span className="max-temp">{props.maxTemp}&deg;C</span>
                <span>&nbsp;/&nbsp;</span>
                <span className="min-temp">{props.minTemp}&deg;C</span>
            </div>
        </div>
    )
}

export default MinTempMaxTemp
