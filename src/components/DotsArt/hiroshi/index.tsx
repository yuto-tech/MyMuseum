import styled from '@emotion/styled';
import React from 'react';
import { hiroshiImage } from './image';

export const DotsArt = () => {
  const IMAGE__COLOR = ['#fff', '#000', 'rgba(247, 226, 183, 1)', '#ffeb3b', '#03a9f4', '#e91e63', '#ff0000'];

  const CreateHiroshi = () => {
    let Arr = [];
    for (let height = 0; hiroshiImage.length > height; height++) {
      for (let width = 0; hiroshiImage[height].length > width; width++) {
        Arr.push(`${width * 10}px ${height * 10}px ${IMAGE__COLOR[hiroshiImage[height][width]]}`);
      }
    }
    return Arr;
  };
  const hiroshi = CreateHiroshi().join(',');

  return <Img hiroshi={hiroshi} />;
};

const DotsSize = styled.div`
  width: 10px;
  height: 10px;
`;
const Img = styled(DotsSize)<{ hiroshi: string }>`
  margin: 100px;
  box-shadow: ${({ hiroshi }) => hiroshi};
`;
