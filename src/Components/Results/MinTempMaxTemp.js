const MinTempMaxTemp = (props) => {
    return (
        <div id="extremes">
            <div>
                <span className="max-temp">High</span>
                <span>&nbsp;/&nbsp;</span>
                <span className="min-temp">Low</span>
            </div>
            <div>
                <span className="max-temp">{props.maxTemp}</span>
                <span>&nbsp;/&nbsp;</span>
                <span className="min-temp">{props.minTemp}</span>
            </div>
        </div>
    )
}

export default MinTempMaxTemp
