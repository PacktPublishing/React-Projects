import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HotelsContext } from '../../context/HotelsContextProvider';
import SubHeader from '../Header/SubHeader';
import HotelItem from './HotelItem';

const HotelItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const HotelLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const Alert = styled.span`
  width: 100%;
  text-align: center;
`;

const Hotels = ({ history }) => {
  const { hotels, loading, error, getHotelsRequest } = React.useContext(
    HotelsContext,
  );
  React.useEffect(() => {
    getHotelsRequest();
  }, [getHotelsRequest]);

  return !loading && !error ? (
    <>
      {history && <SubHeader title='Your Lists' />}
      <HotelItemsWrapper>
        {hotels &&
          hotels.map(hotel => (
            <HotelLink key={hotel.id} to={`hotel/${hotel.id}`}>
              <HotelItem data={hotel} />
            </HotelLink>
          ))}
      </HotelItemsWrapper>
    </>
  ) : (
    <Alert>{loading ? 'Loading...' : error}</Alert>
  );
};

export default Hotels;
