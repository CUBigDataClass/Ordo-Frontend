import React from 'react'
import PropTypes from 'prop-types';

// Mui
import Chip from '@mui/material/Chip';

// Style
import classNames from 'classnames';
import styles from './MovieCard.module.css'

const MovieCard = (props) => {
    const container = classNames(styles.container);
    const image = classNames(styles.image);
    const middle = classNames(styles.middle);

    function onClickHandler () {
        if (props.more) {
            // alert('Redirecting...');
            window.location='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }
    }

    return (
        <div className={container} style={props.more ? {cursor:'pointer'} : {}} onClick={() => onClickHandler()}>
        <img src={props.imgURL} className={image} />
        <div className={middle} style={{color:'white', padding:'10px'}}>
            <div style={{fontSize:'20px'}}>{props.title}</div>
            <div className='row' style={{marginTop:'15px'}}>
                <div className='col'>{props.year}</div>|
                <div className='col'>{props.runningTime}m</div>|
                <div className='col'>{props.rating}</div>|
                <div className='col'>{props.ratingReason}</div>
            </div>
            <div className='row' style={{marginTop:'20px'}}>
                <div className='col'>
                    {props.genres.map((genre) => {
                        return (
                            <Chip variant="outlined" label={genre} style={{width:'fit-content',color:"white"}}/>
                        )
                    })}
                </div>
            </div>
            <div className='row' style={{textAlign:'left', margin:'5%',fontSize:'15px'}}>{props.plot}</div>
        </div>
        </div>
    )
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  runningTime: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  ratingReason: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  plot: PropTypes.string.isRequired,
  more: PropTypes.bool
}

MovieCard.defaultProps = {
    more: false
}
export default MovieCard
