import React from 'react';
import styled from 'styled-components';
import withDataFetching from '../withDataFetching';
import Heading from '../components/Heading/Heading';
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

const Form = ({ data, loading, match, history }) => (
  <>
    { history && <Heading goBack={() => history.goBack()} title={`Add Item`} /> }
    <FormWrapper>
      <form>
        <FormItem id="title" label="Title" placeholder="Insert title" />
        <FormItem id="quantity" label="Quantity" type="number" placeholder="0" />
        <FormItem id="price" label="Price" type="number" placeholder="0.00" />
        <SubmitButton>Add Item</SubmitButton>
      </form>
    </FormWrapper>
  </>
);

export default withDataFetching({dataSource: '../../assets/data.json', loadingMessage: "Loading..."})(Form);
