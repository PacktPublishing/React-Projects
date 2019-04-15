import React from 'react';
import styled from 'styled-components';
import withDataFetching from '../withDataFetching';
import SubHeader from '../components/SubHeader/SubHeader';
import ListItem from '../components/ListItem/ListItem';

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const List = ({ data, match, history }) => {
  const items = data.items && data.items.filter(item => item.listId === parseInt(match.params.id))

  return (
    <>
      { history && <SubHeader goBack={() => history.goBack()} openForm={() => history.push(`${match.url}/new`)} /> }
      <ListItemWrapper>
        { items && items.map(item => <ListItem key={item.id} data={ item } />) }
      </ListItemWrapper>
    </>
  )
};

export default withDataFetching({dataSource: '../../assets/items.json', loadingMessage: "Loading..."})(List);
