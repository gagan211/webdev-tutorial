import { useState } from 'react'

import './App.css'

function App() {

  const image=[ "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];
const [i, seti] = useState(0)

  function previmge() {
    seti(i===0?image.length-1:i-1)
  }
  function nextimge() {
    seti(i===image.length-1?0:i+1)

  }

  return (
    <>
      <h1 > project 1:Image courosle </h1>
      <div className='left-arrow' onClick={previmge}>
      &#9665;    </div>
      <div className='right-arrow' onClick={nextimge}>
      &#9655;
      </div>
      <div className='img'>
        <img src={image[i]} alt="this is an image" />
      </div>
    </>
  )
}    


export default App
