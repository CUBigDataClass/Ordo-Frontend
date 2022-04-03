import React from 'react'
import EmbeddedTweet from '../../components/EmbeddedTweet/EmbeddedTweet'
import MovieOverview from '../../components/MovieOverview/MovieOverview'

import classNames from 'classnames';
import styles from './Home.module.css';

const Home = () => {
  var container = classNames(styles.container, true);
  return (
    <div className={container}>

      {/* <div style={{position:'absolute', bottom:'0', right:'0'}}>
        <EmbeddedTweet />
      </div> */}

      <MovieOverview 
        title={'The Shawshank Redemption'}
        year={'1994'}
        imgURL={'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'}
        releaseDate={'September 22, 1994'}
        runningTime={'142'}
        rating={'9.3/10'}
        ratingReason={'Drama'}
        genres={['Prison', 'Drama', 'Mystery']}
        plot={'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'}
      />
    </div>
  )
}

export default Home

