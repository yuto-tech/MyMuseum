import styled from '@emotion/styled';
import React from 'react';

export const Header = () => {
  return (
    <Box>
      <Icon>
        <Anchor href={'#'} aria-label='Airbnbのホームページ'>
          <SVG></SVG>
        </Anchor>
      </Icon>
      <SearchBar>
        <Location>
          <SomeWhere>どこでも</SomeWhere>
        </Location>
        <Span />
        <Location>
          <NoWeekSpecified>週の指定なし</NoWeekSpecified>
        </Location>
        <Span />
        <Location>
          <AddGuestCount>ゲスト数の追加</AddGuestCount>
        </Location>
      </SearchBar>
    </Box>
  );
};

const Box = styled.div`
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

  padding-inline-start: 40px;
  padding-inline-end: 40px;
`;

//outline:noneを使ってフォーカス時の枠線を消す
//アクセシビリティを考慮すると、ボタンには必ずフォーカスが当たるようにする

const Anchor = styled.a`
  text-decoration: none;
  background-color: #fff;
  vertical-align: middle;
  height: 80px;
  cursor: pointer;
  display: block;
  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #ff385c;
  }
`;

const Icon = styled.div`
  flex: 1 0 140px;
`;

const SVG = styled.div`
  width: 102px;
  height: 30px;
  display: block;
`;

const SearchBar = styled.div`
  display: inline-flex;
  min-width: 348px;
  background-color: #fff;
  flex: 0 1 auto;
  padding: 0 24px;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 40px;
  height: 48px;
  text-decoration: none;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
  transition: box-shadow 0.2s ease;
`;

const Span = styled.span`
  background-color: #ddd;
  flex: 0 0 1px;
  height: 24px;
  width: 10px;
  line-height: 24px;
`;

const Location = styled.button`
  background-color: transparent;
  margin: 0 auto;
  cursor: pointer;
  padding: 0;
  text-align: inherit;
  border: 1px solid transparent;
  border-radius: 4px;
  margin: -1px;
  &:first-of-type {
    padding-left: 8px;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }
`;

const SomeWhere = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap; //この使い方は分からない
  flex: 1 1 auto;
  min-width: 80px;
  overflow: hidden;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
`;

const NoWeekSpecified = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap; //この使い方は分からない
  flex: 1 1 auto;
  min-width: 80px;
  overflow: hidden;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
`;

const AddGuestCount = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap; //この使い方は分からない
  flex: 1 1 auto;
  min-width: 80px;
  overflow: hidden;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
`;
