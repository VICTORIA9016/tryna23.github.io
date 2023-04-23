import React from 'react'
import past from './past.mp4'

const Memes = () => {
  return (
    <div className='main'>
      <div className="overlay"></div>
      <video src={past} autoPlay loop muted />
    </div>
  )
}

export default Memes;
