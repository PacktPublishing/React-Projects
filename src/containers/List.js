import React from 'react';
import styled from 'styled-components';
import { ListsContext } from '../context/ListsContextProvider';
import { ItemsContext } from '../context/ItemsContextProvider';
import SubHeader from '../components/Header/SubHeader';
import ListItem from '../components/ListItem/ListItem';

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const Loading = styled.span`
  width: 100%;
  text-align: center;
`;

// const List = ({ items, loading, list, getListRequest, getItemsRequest, match, history }) => {
const List = ({ match, history }) => {
  const { list, getListRequest } = React.useContext(ListsContext)
  const { loading, items, getItemsRequest } = React.useContext(ItemsContext)

  React.useEffect(() => {
    getListRequest(match.params.id)
    if (!items.length > 0) {
      getItemsRequest(match.params.id)
    }
  }, [])

  return (!loading) ? (
    <>
      { (history && list) && <SubHeader goBack={() => history.goBack()} title={list.title} openForm={() => history.push(`${match.url}/new`)} /> }
      <ListItemWrapper>
        { items && items.map(item => <ListItem key={item.id} data={ item } />) }
      </ListItemWrapper>
    </>
) : <Loading>{loading}</Loading>
};

export default List;
