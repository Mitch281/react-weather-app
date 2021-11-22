import React from 'react'
import { useParams } from 'react-router-dom'

const SearchResults = (props) => {
    const { location } = useParams();

    return (
        <div>
            {location}
        </div>
    )
}

export default SearchResults
