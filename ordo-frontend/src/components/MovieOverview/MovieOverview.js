import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@mui/material';

import MovieCard from '../MovieCard/MovieCard';

import Chip from '@mui/material/Chip';
import classNames from 'classnames';
import styles from './MovieOverview.module.css'


const MovieOverview = (props) => {
    const container = classNames(styles.container);
    const image = classNames(styles.image);
    const middle = classNames(styles.middle);

    const [onHover, setOnHover] = useState(false);

    const title = props.title;
    const year = props.year;
    const imgURL = props.imgURL;
    const releaseDate = props.releaseDate;
    const runningTime = props.runningTime;
    const rating = props.rating;
    const ratingReason = props.ratingReason;
    const genres = props.genres;
    const plot = props.plot;

    const tweets = ['1491255003268644866', '1383105268448305155', '463440424141459456']


    return (
        <div>
            <div className='row'>
                <div className='col-3'>
                    <MovieCard {...props} />
                </div>
                <div className='col-9' style={{color:'#fff', backgroundColor:'white'}}>
                    sdaf
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
