import styled from '@emotion/styled';
import React from 'react';
import { Image } from './image';

export const Sinchan = () => {
  const IMAGE__COLOR = ['#fff', '#000', 'rgba(247, 226, 183, 1)', '#ffeb3b', '#03a9f4', '#e91e63', '#ff0000'];

  const CreateImage = () => {
    let Arr = [];
    for (let height = 0; Image.length > height; height++) {
      for (let width = 0; Image[height].length > width; width++) {
        Arr.push(`${width * 10}px ${height * 10}px ${IMAGE__COLOR[Image[height][width]]}`);
      }
    }
    return Arr;
  };
  const Data = CreateImage().join(',');
  return <Foo Data={Data} />;
};

const SinchanWeight = styled.div`
  width: 10px;
  height: 10px;
`;
const Foo = styled(SinchanWeight)<{ Data: string }>`
  margin: 100px;
  box-shadow: ${({ Data }) => Data};
`;
