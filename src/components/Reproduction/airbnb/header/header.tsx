import styled from '@emotion/styled';
import React from 'react';
import { Controller } from './components/controller';
import { Icon } from './components/icon';
import { SearchBar } from './components/searchBar';

const SearchBarLayout = 'margin: 0 24px;';
const ControllerLayout = 'margin-left: 8px;';

export const Header = () => {
  return (
    <Container>
      <Icon />
      <SearchBar className={SearchBarLayout} />
      <Controller className={ControllerLayout} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;

  padding-inline-start: 80px;
  padding-inline-end: 80px;
`;
