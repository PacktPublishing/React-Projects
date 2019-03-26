import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../components/shared/Card';

const FeedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 5%;
`;

const Loading = styled.div`
  text-align: center;
`;

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: 'Loading...'
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=reactjs&site=stackoverflow');
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
      <FeedWrapper>
        { data.items.map((item) => <Card key={item.question_id} data={item} />) }
      </FeedWrapper>
    );
  }
}

export default Feed;
