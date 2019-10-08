import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styled from 'styled-components/native';
import ListingItem from '../Components/Listing/ListingItem';

const ListingsWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Listings = styled(FlatList)`
  width: 100%;
  padding: 2%;
`;

const Home = ({ navigation }) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  const [data, setData] = React.useState([]);

  const fetchAPI = async () => {
    try {
      const data = await fetch(
        'https://my-json-server.typicode.com/PacktPublishing/React-Projects/listings',
      );
      const dataJSON = await data.json();

      if (dataJSON) {
        setData(dataJSON);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  React.useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <ListingsWrapper>
      {!loading && !error && (
        <Listings
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ListingItem item={item} navigation={navigation} />
          )}
        />
      )}
    </ListingsWrapper>
  );
};

export default Home;
