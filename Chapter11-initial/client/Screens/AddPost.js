import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import Button from '../Components/Button/Button';

const AddPostWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  margin: 60px 0;
`;

const AddPostText = styled(Text)`
  font-size: 20px;
  color: black;
`;

const AddPost = ({ navigation }) => {
  return (
    <AddPostWrapper>
      <AddPostText>Add Post</AddPostText>
      <Button onPress={() => navigation.navigate('Main')} title='Cancel' />
    </AddPostWrapper>
  );
};

export default AddPost;
