import React, { useEffect, useRef, useState } from 'react';
//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import FormPage from './pages/FormPage'
import Photos from './pages/Photos'
//Routing
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {

  const VideoElem = useRef();
  const [page, setPage] = useState('login')
  let animationID;

  useEffect(() => {
    onTimeUpdate();
  }, [page])

  const handlePage = (page) => {
    setPage(page);
    cancelAnimationFrame(animationID)
    
  }
  const onTimeUpdate = () => {
    if(page === 'login' && VideoElem.current.currentTime >= 5){
      VideoElem.current.currentTime = 0;
    } else if (page === 'photos' && VideoElem.current.currentTime >= 10){
      VideoElem.current.currentTime = 5;
    }
      animationID = requestAnimationFrame(onTimeUpdate);
      console.log(page);
      console.log(VideoElem.current.currentTime)
  }
  return (
    <Router>
      <video className="video-container" ref={VideoElem} autoPlay muted playsInline controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>
      <Route exact path='/login' render={() => <FormPage handlePage={handlePage}/>}/>
      <Route exact path='/photos' render={() => <Photos handlePage={handlePage}/>}/>
    </Router>
  );
}

export default App;
