import React, { useState, useEffect } from 'react'
import { Tweet } from 'react-twitter-widgets'


const EmbeddedTweet = () => {
  var tweets = ['1491255003268644866', '1383105268448305155', '463440424141459456']
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{width:'60vh', height:'auto', margin:'1%'}}>
      <div style={{height:'100vh', overflow:'auto'}}>
        {
          tweets.map((tweet) => (
            <div key={tweet}>
                <Tweet tweetId={tweet} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default EmbeddedTweet


