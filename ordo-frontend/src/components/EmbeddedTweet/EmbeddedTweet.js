import React from 'react'
import { Tweet, Timeline } from 'react-twitter-widgets'
const EmbeddedTweet = () => {
  return (
    <div style={{width:'60vh', height:'auto', position:'absolute', bottom:'0', right:'0', marginBottom:'1%'}}>
      <div style={{height:'100vh', overflow:'auto'}}>
        <Tweet tweetId='1491255003268644866' />
        <Tweet tweetId='1491255003268644866' />
        <Tweet tweetId='1491255003268644866' />
      </div>
      
    </div>
  )
}

export default EmbeddedTweet
