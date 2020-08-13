/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const SubTitle = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 25px;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 4px;
  min-width: 250px;
  min-height: 2em;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const BotaoVoltar = styled.button`
  color: thistle;
  border: 1px solid thistle;
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;
