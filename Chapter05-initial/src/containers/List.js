import React from 'react';
import styled from 'styled-components';
import withDataFetching from '../withDataFetching';
import SubHeader from '../components/Header/SubHeader';
import ListItem from '../components/ListItem/ListItem';

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const Alert = styled.span`
  width: 100%;
  text-align: center;
`;

const List = ({ data, loading, error, match, history }) => {
  const items =
    data && data.filter(item => item.listId === parseInt(match.params.id));

  return !loading && !error ? (
    <>
      {history && (
        <SubHeader
          goBack={() => history.goBack()}
          openForm={() => history.push(`${match.url}/new`)}
        />
      )}
      <ListItemWrapper>
        {items && items.map(item => <ListItem key={item.id} data={item} />)}
      </ListItemWrapper>
    </>
  ) : (
    <Alert>{loading ? 'Loading...' : error}</Alert>
  );
};

export default withDataFetching({
  dataSource:
    'https://my-json-server.typicode.com/pranayfpackt/-React-Projects/items',
})(List);
