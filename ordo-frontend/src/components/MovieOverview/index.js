import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactTooltip from "react-tooltip";
import PropTypes from 'prop-types';

import MovieCard from '../MovieCard/MovieCard';
import TwitterFeed from '../Tweets/TwitterFeed';
import MapChart from '../MapChart'


const MovieOverview = () => {
    const [content, setContent] = useState("");
    const location = useLocation();
    const props = location.state.props;

    return (
        <div style={{ marginTop: '1%' }}>
            <div className='row'>
                <div className='col-sm-3'>
                    <MovieCard {...props} />
                </div>
                <div className='col-sm-9' style={{ color: '#fff' }}>
                    <div className='row'>
                        <div className='col-8' style={{ color: '#fff', backgroundColor: 'rgba(0.3,0.3,0.3,0.4)', border: '8px solid #393939' }}>
                            <h3 style={{ textAlign: 'center', fontSize: '2vw', marginTop: '3%' }}>
                                World Map Sentiment Analysis
                            </h3>
                            <MapChart setTooltipContent={setContent} />
                            <ReactTooltip>{content}</ReactTooltip>
                        </div>
                        <div className='col-sm-3'>
                            <TwitterFeed />
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
