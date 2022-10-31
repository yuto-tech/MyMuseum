import styled from '@emotion/styled';
import React from 'react';

type Props = {
  className: string;
};

export const Controller = ({ className }: Props) => {
  return (
    <Container className={className} aria-label='プロフィール'>
      <ControllerAnchor>ホストになる</ControllerAnchor>
      <Expand type='button' aria-expanded='false' aria-label='言語と通貨を選択してください'>
        <Circle />
      </Expand>
      <User type='button' aria-expanded='false' aria-label='メインナビゲーションメニュー'>
        <HamburgerMenu />
        <UserIcon />
      </User>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  flex: auto;
  margin-right: 8px;
  justify-content: flex-end;
  height: 42px;
`;

const ControllerAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  padding: 12px;
  font-weight: 600;
  width: 108px;
  font-size: 14px;
`;

const Expand = styled.button`
  background-color: red;
  border: 0;
  cursor: pointer;
  padding: 12px;
  margin-right: 8px;
`;

const Circle = styled.div`
  //buttonの中にdivを入れるのはダメなのは理解している、svgとかimgが入ることをイメージしてる
  height: 16px;
  width: 16px;
  background-color: aqua;
`;

const User = styled.button`
  display: flex;
  align-items: center;
  background-color: red;
  padding: 5px 5px 5px 12px;
  cursor: pointer;
  margin: 0;
  text-align: inherit;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 21px;
  transition: box-shadow 0.2s ease;
`;

//ASK:buttonの中にdivを入れている理由
const HamburgerMenu = styled.div`
  background-color: aqua;
  height: 16px;
  width: 16px;
`;

const UserIcon = styled.div`
  background-color: aqua;
  height: 30px;
  width: 30px;
  margin-left: 12px;
  border-radius: 99px;
`;
