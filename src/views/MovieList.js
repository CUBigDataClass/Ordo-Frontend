import React from 'react'
import MovieCard from '../components/MovieCard/MovieCard'

const MovieList = () => {
    return (
        <div className='row'>
            {
                Array.apply(null, Array(100)).map(() => (
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3' style={{marginTop:'15px'}}>
                        <MovieCard 
                            title={'The Shawshank Redemption'}
                            year={'1994'}
                            imgURL={'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'}
                            releaseDate={'September 22, 1994'}
                            runningTime={'142'}
                            rating={'9.3/10'}
                            ratingReason={'Drama'}
                            genres={['Prison', 'Drama', 'Mystery']}
                            plot={'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'}
                            more={true}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default MovieList