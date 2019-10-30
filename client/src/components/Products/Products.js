import React from 'react';
import styled from 'styled-components';
import SubHeader from '../Header/SubHeader';
import ProductItem from './ProductItem';

const ProductItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 2% 5%;
`;

const Alert = styled.span`
  width: 100%;
  text-align: center;
`;

const Products = ({ history, loading, error, products }) => {
  const isEmpty = products.length === 0 ? 'No products available' : false;

  return (
    <>
      {history && (
        <SubHeader
          title='Available products'
          goToCart={() => history.push('/cart')}
        />
      )}
      {!loading && !error && !isEmpty ? (
        <ProductItemsWrapper>
          {products &&
            products.map(product => (
              <ProductItem key={product.id} data={product} />
            ))}
        </ProductItemsWrapper>
      ) : (
        <Alert>{loading ? 'Loading' : error || isEmpty}</Alert>
      )}
    </>
  );
};

Products.defaultProps = {
  loading: false,
  error: '',
  products: [],
};

export default Products;
