import React from 'react'
import EmbeddedTweet from '../../components/EmbeddedTweet/EmbeddedTweet'

const Home = () => {
  return (
    <div>
      <div style={{position:'absolute', bottom:'0', right:'0'}}>
        <EmbeddedTweet />
      </div>

    </div>
  )
}

export default Home
