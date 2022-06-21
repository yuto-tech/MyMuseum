import styled from '@emotion/styled';
import React from 'react';
import { shinchanImage } from './image';

export const DotsArt = () => {
  const IMAGE__COLOR = ['#fff', '#000', 'rgba(247, 226, 183, 1)', '#ffeb3b', '#03a9f4', '#e91e63', '#ff0000'];

  const CreateShinchan = () => {
    let Arr = [];
    for (let height = 0; shinchanImage.length > height; height++) {
      for (let width = 0; shinchanImage[height].length > width; width++) {
        Arr.push(`${width * 10}px ${height * 10}px ${IMAGE__COLOR[shinchanImage[height][width]]}`);
      }
    }
    return Arr;
  };
  const shinchan = CreateShinchan().join(',');

  return <Img shinchan={shinchan} />;
};

const DotsSize = styled.div`
  width: 10px;
  height: 10px;
`;
const Img = styled(DotsSize)<{ shinchan: string }>`
  margin: 100px;
  box-shadow: ${({ shinchan }) => shinchan};
`;
