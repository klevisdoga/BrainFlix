import React from 'react'
import Comments from '../../Components/Comments/comments'
import Header from '../../Components/Header/header'
import Video from '../../Components/Video/video'
import VideoInfo from '../../Components/VideoInfo/videoinfo'
import VideoList from '../../Components/VideoList/videolist'

export default function HomePage({fullList, activeVid, sidebarVids, changeVid}) {
  return (
    <div>
    <Header />
    {fullList
      .filter(video => video.id === activeVid)
      .map((item) => (
        <Video
          key={item.id}
          id={item.id}
          image={item.image}
        />
      ))}
    <div className='videoinfo-and-list'>
      <div className='videoinfo-and-comments'>
        {fullList
          .filter(video => video.id === activeVid)
          .map((item) => (
            <VideoInfo
              key={item.id}
              id={item.id}
              title={item.title}
              channel={item.channel}
              timestamp={item.timestamp}
              views={item.views}
              likes={item.likes}
              description={item.description}
              length={item.comments.length}
            />
          ))}

        <Comments
          activeVid={activeVid}
          fullList={fullList}
        />
      </div>
      <VideoList
        sidebarVids={sidebarVids}
        changeVid={changeVid}
        activeVid={activeVid}
      />
    </div></div>
  )
}
