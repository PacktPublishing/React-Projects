import React from 'react';
import styled from 'styled-components';
import { ReviewsContext } from '../../context/ReviewsContextProvider';
import SubHeader from '../Header/SubHeader';
import FormInput from './FormInput';
import Button from '../Button/Button';

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const SubmitButton = styled(Button)`
  background: blue;
  margin: 2% 0;
`;

const Form = ({ match, history }) => {
  const { addReviewRequest } = React.useContext(ReviewsContext)
  const [state, setState] = React.useState({ title: '', rating: '', description: '' })

  const handleOnChange = (key, e) => {
    setState({ ...state, [key]: e.target.value })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addReviewRequest({ ...state, id: Math.floor(Math.random() * 100), hotelId: parseInt(match.params.id) })
    history.goBack()
  }

  return (
    <>
      { history && <SubHeader goBack={() => history.goBack()} title={`Add Review`} /> }
      <FormWrapper>
        <form onSubmit={handleOnSubmit}>
          <FormInput id="title" label="Title" placeholder="Insert title" value={state.title} handleOnChange={handleOnChange} />
          <FormInput id="rating" label="Rating" type="number" placeholder="0" max={5} value={state.rating} handleOnChange={handleOnChange} />
          <FormInput id="description" label="Description" type="textarea" placeholder="Lorem ipsum..." value={state.description} handleOnChange={handleOnChange} />
          <SubmitButton>Add Review</SubmitButton>
        </form>
      </FormWrapper>
    </>
  );
}

export default Form;
