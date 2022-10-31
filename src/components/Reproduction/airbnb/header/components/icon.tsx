import styled from '@emotion/styled';
import React from 'react';

export const Icon = () => {
  return (
    <Container>
      <Anchor href={'#'} aria-label='Airbnbのホームページ'>
        <SVG></SVG>
      </Anchor>
    </Container>
  );
};

//outline:noneを使ってフォーカス時の枠線を消す
//アクセシビリティを考慮すると、ボタンには必ずフォーカスが当たるようにする

const Container = styled.div`
  flex: 1 0 140px;
`;

const Anchor = styled.a`
  text-decoration: none;
  background-color: #fff;
  cursor: pointer;
  display: block;
  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #ff385c;
  }
`;

const SVG = styled.div`
  width: 118px;
  height: 64px;
  display: block;
  margin: auto 0;
  background-color: red;
`;
