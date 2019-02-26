import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.span`
  font-weight: strong;
`;

const List = ({ items }) => (
  <ListWrapper>
    { items.map((item) =>
      <ListItem key={item.label}>
        <Label>{item.label}</Label>{item.value}
      </ListItem>
    )}
  </ListWrapper>
);

export default List;
