import React from 'react';
import styled from 'styled-components';
import SubHeader from '../Header/SubHeader';
import ProductItem from './ProductItem';

export const ProductItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 2% 5%;
`;

export const Loading = styled.span`
  width: 100%;
  text-align: center;
`;

const Products = ({ history, loading, products }) => {
  const isEmpty = products.length === 0 ? 'No products available' : false;

  return (
    <>
      {history && (
        <SubHeader
          title='Available products'
          goToCart={() => history.push('/cart')}
        />
      )}
      {!loading && !isEmpty ? (
        <ProductItemsWrapper>
          {products &&
            products.map(product => (
              <ProductItem key={product.id} data={product} />
            ))}
        </ProductItemsWrapper>
      ) : (
        <Loading>{loading || isEmpty}</Loading>
      )}
    </>
  );
};

Products.defaultProps = {
  loading: false,
  products: [],
};

export default Products;
