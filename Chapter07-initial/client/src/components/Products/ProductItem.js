import React from 'react';
import styled from 'styled-components';

const ProductItemWrapper = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  justify-content: space-between;
  padding: 1%;
  background: lightGray;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 2%;
  text-decoration: none;
`;

const Title = styled.h3`
  margin-left: 2%;
`;

const Thumbnail = styled.img`
  border-radius: 5px;
`;

const ProductItem = ({ data }) => (
  <ProductItemWrapper>
    <Thumbnail src={data.thumbnail} width={200} />
    <Title>{data.title}</Title>
  </ProductItemWrapper>
);

export default ProductItem;
