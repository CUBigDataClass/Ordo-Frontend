import React from 'react'
import CustomTweet from './CustomTweet'

import { Typography } from '@mui/material';


const TwitterFeed = () => {
  var tweets = ['1491255003268644866', '1383105268448305155', '463440424141459456']
  
  return (
    <div style={{ width: '40vh', height: 'auto', margin: '0 1% 1% 1%', float: 'center' }}>
      <Typography variant='h5'>Twitter Review's</Typography>
      <div style={{ height: '90vh', overflow: 'auto' }}>
        {
          tweets.map((tweet) => (
            <CustomTweet tweet={tweet} />
          ))
        }
      </div>
    </div>
  )
}

export default TwitterFeed


