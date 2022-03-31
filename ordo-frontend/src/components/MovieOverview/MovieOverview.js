import React from 'react'
import PropTypes from 'prop-types';



const MovieOverview = (props) => {

    const title = props.title
    const year = props.year
    const imgURL = props.imgURL
    const releaseDate = props.releaseDate
    const runningTime = props.runningTime
    const rating = props.rating
    const ratingReason = props.ratingReason
    const genres = props.genres
    const plot = props.plot

    return (
        <div style={{overflow:'hidden'}}>
            <img src={imgURL} style={{height:'100vh'}} />
        
        </div>
    )
}

MovieOverview.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    runningTime: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    ratingReason: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    plot: PropTypes.string.isRequired
}

// MovieOverview.defaultProps = {
// }

export default MovieOverview
