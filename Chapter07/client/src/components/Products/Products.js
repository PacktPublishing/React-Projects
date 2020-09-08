import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import SubHeader from '../Header/SubHeader';
import ProductItem from './ProductItem';
import Filters from './Filters';
import { GET_PRODUCTS, GET_LIMIT } from '../../constants';

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

const Products = ({ history }) => (
  <>
    {history && (
      <SubHeader
        title='Available products'
        goToCart={() => history.push('/cart')}
      />
    )}
    <Query query={GET_LIMIT}>
      {({ data }) => (
        <>
          <Filters limit={parseInt(data.limit)} />
          <Query
            query={GET_PRODUCTS}
            variables={{ limit: parseInt(data.limit) }}
          >
            {({ loading, error, data }) => {
              if (loading || error) {
                return <Alert>{loading ? 'Loading...' : error.message}</Alert>;
              }
              return (
                <ProductItemsWrapper>
                  {data.products &&
                    data.products.map(product => (
                      <ProductItem key={product.id} data={product} />
                    ))}
                </ProductItemsWrapper>
              );
            }}
          </Query>
        </>
      )}
    </Query>
  </>
);

export default Products;
