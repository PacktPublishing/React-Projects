import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const HeaderWrapper = styled.div`
  background-color: orange;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Title = styled.h1`
  pointer-events: none;
`;

const Header = () => (
  <>
    <Helmet>
      <title>Q&A Feed</title>
      <meta
        name='description'
        content='This is a Community Feed project build with React'
      />
    </Helmet>
    <HeaderWrapper>
      <Title>Q&A Feed</Title>
    </HeaderWrapper>
  </>
);

export default Header;
