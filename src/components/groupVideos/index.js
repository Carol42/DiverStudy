/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { VideoCardGroupContainer } from './styles';
import VideoCard from '../Carousel/components/VideoCard';
// import dadosIniciais from '../../data/dados_iniciais.json';

// import Slider, { SliderItem } from './components/Slider';

function GroupVideos({
  // ignoreFirstVideo,
  category,
}) {
  // const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  //  const categoryExtraLink = category.link_extra;
  const { videos } = category;
  return (
    <VideoCardGroupContainer>
      {videos.map((video) => (
        <VideoCard
          videoTitle={video.titulo}
          videoURL={video.url}
          categoryColor={categoryColor}
              />
      ))}
    </VideoCardGroupContainer>
  );
}

export default GroupVideos;
