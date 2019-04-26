import React from 'react';
import styled from 'styled-components';
import SubHeader from '../components/Header/SubHeader';
import FormItem from '../components/FormItem/FormItem';
import Button from '../components/Button/Button';

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

const Form = ({ addItemRequest, match, history }) => {
  const [state, setState] = React.useState({ title: '', quantity: '', price: '' })

  const handleOnChange = (key, e) => {
    setState({ ...state, [key]: e.target.value })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addItemRequest({ ...state, id: Math.floor(Math.random() * 100), listId: parseInt(match.params.id) })
    history.goBack()
  }

  return (
    <>
      { history && <SubHeader goBack={() => history.goBack()} title={`Add Item`} /> }
      <FormWrapper>
        <form onSubmit={handleOnSubmit}>
          <FormItem id="title" label="Title" placeholder="Insert title" value={state.title} handleOnChange={handleOnChange} />
          <FormItem id="quantity" label="Quantity" type="number" placeholder="0" value={state.quantity} handleOnChange={handleOnChange} />
          <FormItem id="price" label="Price" type="number" placeholder="0.00" value={state.price} handleOnChange={handleOnChange} />
          <SubmitButton>Add Item</SubmitButton>
        </form>
      </FormWrapper>
    </>
  );
}

export default Form;
