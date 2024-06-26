import React, { useRef, useState } from 'react'
import './App.css'

//use ref
//reference a value that is not needed for rendering

//useRef(initialValue)

function VideoPlayer(){
  const [isPlaying, setisPlaying] = useState(false);
  const videoRef= useRef(null);

  function handleClick(){

    setisPlaying(!isPlaying);

    if(!isPlaying){
      videoRef.current.play();
    }else{
      videoRef.current.pause();

    }

  }

  return(
    <>
      <button onClick={handleClick} > {isPlaying ? 'Pause' :'Play'}  </button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <video 
        width="300"
        ref={videoRef}
        onPlay={() => setisPlaying(true)}
        onPause={() => setisPlaying(false)}
      >
        <source
          src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
          type='video/mp4'
        />
      </video>
    </>
  )
}

function App() {
 
  return (
    <div>
      <h1>Dom</h1>
    <VideoPlayer/>
    </div>
  )
}

export default App