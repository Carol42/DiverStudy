import React from 'react';
import { VideoCardGroupContainer, Title } from './styles';
import VideoCard from '../Carousel/components/VideoCard';
//import Slider, { SliderItem } from './components/Slider';

function GroupVideos({
 // ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
//  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            Relatividade
          </Title>
        </>
      )}
      {videos.map((video) => {
          return(
      <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
      )
      })}
    </VideoCardGroupContainer>
  );
}

export default GroupVideos;