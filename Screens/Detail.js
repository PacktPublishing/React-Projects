import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import ListingDetail from '../Components/Listing/ListingDetail'

const Detail = ({ navigation }) => {
  const item = navigation.getParam('item', {})

  return <ListingDetail item={item} />
};

export default Detail;
