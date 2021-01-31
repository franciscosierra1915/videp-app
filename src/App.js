import React, { useEffect, useRef, useState } from 'react';
//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import FormPage from './pages/FormPage'
import Photos from './pages/Photos'
//Routing
import { BrowserRouter as Router, Route } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {

  const VideoElem = useRef();
  const [scene, setScene] = useState(['login', 0, 5])
  const scenes = {
    scene1: ['login', 0, 5],
    scene2: ['photos', 5, 10],
    scene3: ['cards', 10, 15]
  }
  let animationID;

  useEffect(() => {
    onTimeUpdate();
  }, [scene])

  const handleScene = (scene) => {
    if(scene === 'login'){
      setScene(scenes.scene1);
      VideoElem.current.currentTime = scenes.scene1[1]
    } else if (scene === 'photos'){
      setScene(scenes.scene2);
      VideoElem.current.currentTime = scenes.scene2[1]
    }
    cancelAnimationFrame(animationID)
  }
  const onTimeUpdate = () => {
    if(scene[0] === 'login' && VideoElem.current.currentTime >= scene[2]){
      VideoElem.current.currentTime = 0;
    } else if (scene[0]=== 'photos' && VideoElem.current.currentTime >= scene[2]){
      VideoElem.current.currentTime = 5;
    }
      animationID = requestAnimationFrame(onTimeUpdate);
  }
  return (
    <Router>
      <video className="video-container" ref={VideoElem} autoPlay muted playsInline src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>
      <AnimatePresence exitBeforeEnter>
        <Route key='Login' exact path='/login' render={() => <FormPage handleScene={handleScene}/>}/>
        <Route key='Photos' exact path='/photos' render={() => <Photos handleScene={handleScene}/>}/>
      </AnimatePresence>
    </Router>
  );
}

export default App;
