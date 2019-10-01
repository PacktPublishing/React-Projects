import React from 'react';
import Api from '../api';

export const ReviewsContext = React.createContext();

const initialValue = {
  reviews: [],
  loading: true,
  error: '',
};

const reducer = (value, action) => {
  switch (action.type) {
    case 'GET_REVIEWS_SUCCESS':
      return {
        ...value,
        reviews: action.payload,
        loading: false,
      };
    case 'GET_REVIEWS_ERROR':
      return {
        ...value,
        reviews: [],
        loading: false,
        error: action.payload,
      };
    case 'ADD_REVIEW_SUCCESS':
      console.log(action);
      return {
        ...value,
        reviews: [...value.reviews, action.payload],
        loading: false,
      };
    case 'ADD_REVIEW_ERROR':
      return {
        ...value,
        loading: false,
        error: 'Something went wrong...',
      };
    default:
      return value;
  }
};

const ReviewsContextProvider = ({ children }) => {
  const [value, dispatch] = React.useReducer(reducer, initialValue);

  const getReviewsRequest = async id => {
    const result = await Api.fetchData(
      `https://my-json-server.typicode.com/pranayfpackt/-React-Projects/hotels/${id}/reviews`,
    );

    if (result.data && result.data.length) {
      dispatch({ type: 'GET_REVIEWS_SUCCESS', payload: result.data });
    } else {
      dispatch({ type: 'GET_REVIEWS_ERROR', payload: result.error });
    }
  };

  const addReviewRequest = async content => {
    const result = await Api.postData(
      'https://my-json-server.typicode.com/pranayfpackt/-React-Projects/hotels',
      content,
    );

    if (result.data && result.data.hasOwnProperty('id')) {
      dispatch({ type: 'ADD_REVIEW_SUCCESS', payload: content });
    } else {
      dispatch({ type: 'ADD_REVIEW_ERROR' });
    }
  };

  return (
    <ReviewsContext.Provider
      value={{ ...value, getReviewsRequest, addReviewRequest }}
    >
      {children}
    </ReviewsContext.Provider>
  );
};

export default ReviewsContextProvider;
