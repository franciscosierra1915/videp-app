// import React, { useState, useEffect, useRef } from 'react';

// function App() {

//   const VideoElem = useRef();

//   const [scene, setScene] = useState([0, 5, false, 'scene1']);
//   const [onPlay, setOnPlay] = useState(null);

//   const scene1 = [0, 5, false, 'scene1'];
//   const scene2 = [5, 10, false, 'scene2'];
//   const scene3 = [10, 15, false, 'scene3'];
//   const scene4 = [16, 20, false, 'scene4'];
//   const scene5 = [20, 25, true, 'loop'];

//   useEffect(() => {
//     onTimeUpdate();
//   }, [scene])

//   const onTimeUpdate = () => {
//     if(scene[3] === 'loop'){
//       requestAnimationFrame(onTimeUpdate)
//       console.log('first level')
//       if(VideoElem.current.currentTime > scene[1]){
//         console.log('second level')
//         VideoElem.current.currentTime = scene[0]
//         requestAnimationFrame(onTimeUpdate)
//       }
//     } else if (VideoElem.current.currentTime > scene[1]){
//       console.log('third level')
//       setOnPlay(scene[3])
//       VideoElem.current.pause()
//       cancelAnimationFrame(onTimeUpdate)
//     } else {
//       requestAnimationFrame(onTimeUpdate)
//       console.log('forth level')
//     }
//   }

//   const handleClick = (id) => {
//     if(id === 'scene2'){
//       setOnPlay(null)
//       setScene(scene2);
//       VideoElem.current.play();
//     } else if (id === 'scene3'){
//       setOnPlay(null)
//       setScene(scene3);
//       VideoElem.current.play();
//     } else if (id === 'scene4'){
//       setOnPlay(null)
//       setScene(scene4);
//       VideoElem.current.play();
//     }
//   }

//   const handleLoop = () => {
//     setOnPlay('stop')
//     setScene(scene5);
//     VideoElem.current.play();
//   }

//   const handleStop = () => {
//     VideoElem.current.pause();
//     setOnPlay('play')
//   }

//   const handlePlay = () => {
//     VideoElem.current.play();
//     setOnPlay('stop')
//   }

//   return (
//     <>
//     {<section className="gui-container">
//       {onPlay === 'scene1' ? <button onClick={() => handleClick('scene2')}>Continue To Scene 2</button> : null}
//       {onPlay === 'scene2' ? <button onClick={() => handleClick('scene3')}>Continue To Scene 3</button> : null}
//       {onPlay === 'scene3' ? <button onClick={() => handleClick('scene4')}>Continue To Scene 4</button> : null}
//       {onPlay === 'scene4' ? <button onClick={() => handleLoop()}>Loop</button> : null}
//       {onPlay === 'stop' ? <button onClick={() => handleStop()}>Stop</button> : null}
//       {onPlay === 'play' ? <button onClick={() => handlePlay()}>Play</button> : null}
//     </section>}
//     <section className="video-container">
//       <video ref={VideoElem} autoPlay muted playsInline src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>
//     </section>
//     </>
//   );
// }

// export default App;
