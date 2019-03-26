import React, { Component } from 'react';
import styled from 'styled-components';

const QuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 5%;
`;

const Loading = styled.div`
  text-align: center;
`;

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: 'Loading...'
    };
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <Loading>{loading}</Loading>
    }

    return (
      <QuestionWrapper></QuestionWrapper>
    );
  }
}

export default Question;
