import React from 'react'
import { useParams } from 'react-router-dom'

const SearchResults = () => {
    const { location } = useParams();

    return (
        <div>
            {location}
        </div>
    )
}

export default SearchResults
