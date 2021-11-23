import React from 'react'
import { useParams } from 'react-router-dom'

const SearchResults = () => {
    const { city, country } = useParams();

    return (
        <div id="weather">
            <h1>The weather today in {city}, {country}</h1>
        </div>
    )
}

export default SearchResults
