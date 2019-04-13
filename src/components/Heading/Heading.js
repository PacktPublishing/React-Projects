import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const HeadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: navajowhite;
`;

const Title = styled.h2`
  text-align: center;
  flex-basis: 60%;

  &:nth-child(2):last-child {
    margin-right: 20%;
  }
`;

const HeadingButton = styled(Button)`
  margin: 10px 5%;
`;

const Heading = ({ goBack, title, openForm = false }) => (
  <HeadingWrapper>
    <HeadingButton onClick={goBack}>{`< Go Back`}</HeadingButton>
    <Title>{ title }</Title>
    { openForm && <HeadingButton onClick={openForm}>{`+ Add Item`}</HeadingButton> }
  </HeadingWrapper>
);

export default Heading;
