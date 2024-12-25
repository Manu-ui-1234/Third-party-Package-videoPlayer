import ReactPlayer from 'react-player'

import './index.css'

const videoURL = 'https://youtu.be/jOst7Trpj7o?si=hSsmI_BIVH-OhMZO'
const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer
        url={videoURL}
        controls
        light
      />
    </div>
  </div>
)

export default VideoPlayer
