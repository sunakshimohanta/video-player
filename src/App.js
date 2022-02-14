import React from 'react';
import { Menu } from './Menu';
import { Video } from './Video';
import './App.css';

const VIDEOS = {
  fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};


class App extends React.Component {
 constructor(props){
   super(props);
   this.state={src:VIDEOS.fast};
   this.selectVideo = this.selectVideo.bind(this);
 }

 selectVideo(newVideo) {
   this.setState({src:VIDEOS[newVideo]});
 }

 render() {
   return(
     <div> 
        <h1>Video Player</h1>
        <Menu selectVideo={this.selectVideo}/>
        <Video src={this.state.src}/>
     </div>
   );
 };
}

export default App;
