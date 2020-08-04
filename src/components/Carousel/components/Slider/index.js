/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  overflow-x:visible;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    
    &:before {
      font-size: 30px;
      color: thistle;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }

  .slick-dots li button:before{
    color: white;
  }
  .slick-dots li.slick-active button:before {
    color: purple;
  }
  .slick-dots {
    margin-bottom: -30px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  a:hover {
    transition:500ms;
    transform:scale(1.2);
    margin:0 30px 0 30px;
    border: none;
  }
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: true,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      swipeToSlide: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
