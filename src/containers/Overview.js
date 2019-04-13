import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import withDataFetching from '../withDataFetching';

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 5%;
`;

const Loading = styled.div`
  text-align: center;
`;

const ListLink = styled(Link)`
  display: flex;
  text-align: left;
  align-items: center;
  padding: 1%;
  background: lightGray;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin-bottom: 2%;
  color: black;
  text-decoration: none
`;

const Title = styled.h3`
  flex-basis: 80%;
`;

const Overview = ({loading, data}) => (
  <ListWrapper>
    { (loading) && <Loading>{loading}</Loading> }
    {data.lists && data.lists.map((list) => (
      <ListLink key={list.id} to={`list/${list.id}`}>
        <Title>{ list.title }</Title>
      </ListLink>
    ))}
  </ListWrapper>
);

export default withDataFetching({dataSource: '../../assets/data.json', loadingMessage: "Loading..."})(Overview);
