import React, { useEffect, useRef } from 'react';
import Login from './pages/login'

function App() {

  const VideoElem = useRef();

  useEffect(() => {
    console.log(VideoElem.current)
  }, [])
  return (
    <>
      <video className="video-container" ref={VideoElem} autoPlay muted playsInline controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>
      <Login/>
    </>
  );
}

export default App;
