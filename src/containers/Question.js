import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../components/Feed/Card';

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

  async componentDidMount() {
    const { match } = this.props;
    try {
      const data = await fetch(`https://api.stackexchange.com/2.2/questions/${match.params.id}?site=stackoverflow`);
      const dataJSON = await data.json();

      if (dataJSON) {
        this.setState({
          data: dataJSON,
          loading: false
        })
      }
    } catch(error) {
      this.setState({
       loading: error.message
     })
    }
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <Loading>{loading}</Loading>
    }

    return (
      <QuestionWrapper>
        <Card key={data.items[0].question_id} data={data.items[0]} />
      </QuestionWrapper>
    );
  }
}

export default Question;
