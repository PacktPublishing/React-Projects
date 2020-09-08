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

const Form = ({ match, history }) => (
  <>
    {history && (
      <SubHeader goBack={() => history.goBack()} title={`Add Item`} />
    )}
    <FormWrapper>
      <form>
        <FormItem id='title' label='Title' placeholder='Insert title' />
        <FormItem
          id='quantity'
          label='Quantity'
          type='number'
          placeholder='0'
        />
        <FormItem id='price' label='Price' type='number' placeholder='0.00' />
        <SubmitButton>Add Item</SubmitButton>
      </form>
    </FormWrapper>
  </>
);

export default Form;
