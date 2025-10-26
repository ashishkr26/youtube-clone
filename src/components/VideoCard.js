import React from 'react'

const VideoCard = ({info}) => { 
  const {snippet, statistics} = info;  
  const {title, channelTitle, thumbnails} = snippet
  return (
    <div className='m-2 p-2 w-72 shadow-lg rounded-md'>
     <img className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url}/>
     <ul>

      <li className='font-bold py-2'>{title}</li>
      <li className='text-sm'>{channelTitle}</li>
      <li className='text-sm'>{statistics.viewCount } views</li>
     </ul>
    </div>
  )
}

export const AdVideoCard =({info})=>{
  return(
    <div className=' rounded-md border border-gray-400 m-1 '><VideoCard info = {info}/></div>
  )
}

export default VideoCard
