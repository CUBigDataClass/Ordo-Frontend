import React from 'react'
import { Tweet } from 'react-twitter-widgets'

import { Typography } from '@mui/material';
import './style.css'

const EmbeddedTweet = () => {
  var tweets = ['1491255003268644866', '1383105268448305155', '463440424141459456']
  return (
    <div style={{ width: '40vh', height: 'auto', margin: '0 1% 1% 1%', float: 'center' }}>
      <Typography variant='h5'>Twitter Review's</Typography>
      <div style={{ height: '90vh', overflow: 'auto' }}>
        {
          tweets.map((tweet) => (
            <div key={tweet}>
              <Tweet tweetId={tweet} />
            </div>
          ))
        }
        <div className="spinner-container">
          <div className="loading-spinner" style={{ display: 'block', marginRight: 'auto', marginLeft: 'auto' }} />
        </div>
      </div>
    </div>
  )
}

export default EmbeddedTweet


