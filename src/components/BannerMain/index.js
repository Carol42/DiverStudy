/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer } from './styles';
import Divertido from '../../assets/img/Divertido.png';
import Livros from '../../assets/img/livros1.png';

/* function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*). */
/*  '$7',
    );
} */

export default function BannerMain({
  videoTitle,
  videoDescription,
  url,
}) {
  // const youTubeID = getYouTubeId(url);
  /* const bgUrl = <img className="fundo" src={Livros} alt="livros" />; */

  return (
    <BannerMainContainer>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            <img className="divertido" src={Divertido} alt="divertido" />
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description style={{ fontSize: '1.5em', color: 'thistle' }}>
            {videoDescription}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <div>
            <img className="livros" src={Livros} alt="livros" />
          </div>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
