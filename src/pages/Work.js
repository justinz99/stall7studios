import { videos } from "../videos";

export default function Work() {
    


  return (
    <div className='works'>
      <h1>Work</h1>
      <div className='videos-list'>
        {videos.map(video => (<VideoCard video={video} key={video.id}/>))}
      </div>
    </div>
  );
}

const VideoCard = (props) => {
  const { id, title, thumbnail } = props.video
  return (
    <div>
      <img src={thumbnail} className='video-thumbnail' alt='video thumbnail' />
    </div>
  )
}