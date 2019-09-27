import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const SubHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: navajowhite;
`;

const Title = styled.h2`
  text-align: center;
  flex-basis: 60%;

  &:first-child {
    margin-left: 20%;
  }

  &:last-child {
    margin-right: 20%;
  }
`;

const SubHeaderButton = styled(Button)`
  margin: 10px 5%;
`;

const SubHeader = ({ goBack, title, openForm = false }) => (
  <SubHeaderWrapper>
    {goBack && (
      <SubHeaderButton onClick={goBack}>{`< Go Back`}</SubHeaderButton>
    )}
    <Title>{title}</Title>
    {openForm && (
      <SubHeaderButton onClick={openForm}>{`+ Add Item`}</SubHeaderButton>
    )}
  </SubHeaderWrapper>
);

export default SubHeader;
