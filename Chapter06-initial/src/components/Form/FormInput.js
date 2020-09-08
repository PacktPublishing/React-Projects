import React from 'react';
import styled from 'styled-components';

const FormInputWrapper = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  margin-bottom: 2%;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  padding: 10px 0;
`;

const Input = styled.input`
  flex-basis: 60%;
  border: 0;
  font-size: inherit;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid lightGrey;
`;

const TextArea = styled.textarea`
  flex-basis: 60%;
  border: 0;
  font-size: inherit;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid lightGrey;
`;

const FormInput = ({
  id,
  label,
  type = 'text',
  handleOnChange,
  ...otherProps
}) => (
  <FormInputWrapper>
    <Label htmlFor={id}>{label}</Label>
    {type === 'textarea' ? (
      <TextArea id={id} onChange={e => handleOnChange(e.target.value)} {...otherProps} />
    ) : (
      <Input
        id={id}
        type={type}
        onChange={e => handleOnChange(e.target.value)}
        {...otherProps}
      />
    )}
  </FormInputWrapper>
);

export default FormInput;
