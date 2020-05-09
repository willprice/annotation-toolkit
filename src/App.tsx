import React from 'react';
import './App.css';
import Video from './Video';
import Container from "./Container";


function App() {
  return (
    <div className="App">
        <Container>
            <Video source="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_30MB.mp4"></Video>
        </Container>
    </div>
  );
}

export default App;
