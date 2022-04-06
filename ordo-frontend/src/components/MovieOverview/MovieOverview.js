import React from 'react'
import PropTypes from 'prop-types';

import MovieCard from '../MovieCard/MovieCard';

import EmbeddedTweet from '../EmbeddedTweet/EmbeddedTweet';
import MapChart from '../MapChart/MapChart'

const MovieOverview = (props) => {
    // const title = props.title;
    // const year = props.year;
    // const imgURL = props.imgURL;
    // const runningTime = props.runningTime;
    // const rating = props.rating;
    // const ratingReason = props.ratingReason;
    // const genres = props.genres;
    // const plot = props.plot;



    return (
        <div style={{ marginTop: '1%' }}>
            <div className='row'>
                <div className='col-sm-3'>
                    <MovieCard {...props} />
                </div>
                <div className='col-sm-9' style={{ color: '#fff' }}>
                    <div className='row'>
                        <div className='col-8' style={{ color: '#fff', backgroundColor: 'rgba(0.3,0.3,0.3,0.4)', border: '8px solid #393939', position: 'relative' }}>
                            <div style={{ zIndex: '1', position: 'absolute', height: '10vh', width: '100%', marginLeft:'-1.5%' }}>
                                <h3 style={{textAlign:'center', fontSize:'2vw',marginTop:'3%'}}>
                                    World Map Sentiment Analysis
                                </h3>
                            </div>
                            <MapChart />
                        </div>
                        <div className='col-sm-3'>
                            <EmbeddedTweet />
                        </div>
                    </div>
                </div>
            </div>
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
