import styled from '@emotion/styled';
import React from 'react';

type Props = {
  className: string;
};

export const SearchBar = ({ className }: Props) => {
  return (
    <Container className={className}>
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
        <SearchIcon>Q</SearchIcon>
      </Location>
    </Container>
  );
};

const Container = styled.div`
  display: inline-flex;
  min-width: 400px;
  background-color: #fff;
  flex: 0 1 auto;
  margin: 0 24px;
  text-align: center;
  align-items: center;
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
  display: flex;
  background-color: transparent;
  align-items: center;
  cursor: pointer;
  padding: 0;
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
  overflow: hidden;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
`;

const AddGuestCount = styled.div`
  color: #717171;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap; //この使い方は分からない
  flex: 1 1 auto;
  overflow: hidden;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
`;

const SearchIcon = styled.div`
  background-color: #ff385c;
  margin: 7px 7px 7px 0;
  border-radius: 50%;
  padding: 10px;
  height: 32px;
  width: 32px;
  color: #fff;
`;
