import React from 'react';
import './VideoItem.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item'>
            <img className='image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
             <div className='header'>
             <h4>{video.snippet.title}</h4>
             <p>{video.snippet.channelTitle}</p>
             </div>
        </div>
    )
};
export default VideoItem;