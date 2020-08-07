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
