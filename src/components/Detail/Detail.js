import React from 'react';
import styled from 'styled-components';
import { HotelsContext } from '../../context/HotelsContextProvider';
import { ReviewsContext } from '../../context/ReviewsContextProvider';
import SubHeader from '../Header/SubHeader';
import ReviewItem from './ReviewItem';

const ReviewsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const Alert = styled.span`
  width: 100%;
  text-align: center;
`;

const Detail = ({ match, history }) => {
  const { hotel, getHotelRequest } = React.useContext(HotelsContext);
  const { loading, error, reviews, getReviewsRequest } = React.useContext(
    ReviewsContext,
  );

  React.useEffect(() => {
    getHotelRequest(match.params.id);
    if (!reviews.length > 0) {
      getReviewsRequest(match.params.id);
    }
  }, [getHotelRequest, getReviewsRequest, match.params.id, reviews.length]);

  return !loading && !error ? (
    <>
      {history && hotel && (
        <SubHeader
          goBack={() => history.goBack()}
          title={hotel.title}
          openForm={() => history.push(`${match.url}/new`)}
        />
      )}
      <ReviewsWrapper>
        {reviews &&
          reviews.map(review => <ReviewItem key={review.id} data={review} />)}
      </ReviewsWrapper>
    </>
  ) : (
    <Alert>{loading ? 'Loading...' : error}</Alert>
  );
};

export default Detail;
