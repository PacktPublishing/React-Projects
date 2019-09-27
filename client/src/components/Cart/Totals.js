import React from 'react';
import styled from 'styled-components';

const TotalsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1%;
  background: gray;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 2%;
`;

const Total = styled.span`
  width: 100%;
  font-size: 18px;
  color: white;
  font-weight: bold;
  text-align: right;
`;

const Totals = ({ count }) => (
  <TotalsWrapper>
    <Total>{`Total products: ${count}`}</Total>
  </TotalsWrapper>
);

export default Totals;
