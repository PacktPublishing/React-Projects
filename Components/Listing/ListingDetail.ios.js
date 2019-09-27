import React from 'react';
import styled from 'styled-components/native';
import { Image, Text, View, Dimensions } from 'react-native';

const ListingDetailWrapper = styled(View)`
  display: flex;
`;

const Details = styled(View)`
  position: absolute;
  top: 0;
  padding: 5%;
  width: 100%;
  background: rgba(0, 0, 255, 0.1);
`;

export const Title = styled(Text)`
  flex-wrap: wrap;
  width: 99%;
  font-size: 30px;
`;

export const Price = styled(Text)`
  font-weight: bold;
  font-size: 20px;
  color: blue;
`;

const Thumbnail = styled(Image)`
  width: 100%;
  height: ${Dimensions.get('window').height};
`;

const ListingDetail = ({ item }) => (
  <ListingDetailWrapper>
    <Thumbnail source={{ uri: item.thumbnail }} />
    <Details>
      <Title>{item.title}</Title>
      <Price>{item.price}</Price>
    </Details>
  </ListingDetailWrapper>
);

export default ListingDetail;
