import styled from '@emotion/styled';
import React from 'react';
import { Header } from './header';

export const Template = () => {
  return (
    <Layout>
      <Header />
      aaaaa
    </Layout>
  );
};

const Layout = styled.div`
  height: 200vh;
  width: 100vw;
  background-color: #f7f7f7;
`;
