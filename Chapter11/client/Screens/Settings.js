import React from 'react';
import { AsyncStorage, View } from 'react-native';
import styled from 'styled-components/native';
import Button from '../Components/Button/Button';

const SettingsWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Settings = ({ navigation }) => (
  <SettingsWrapper>
    <Button
      title='Log out'
      onPress={() => {
        AsyncStorage.removeItem('token').then(() =>
          navigation.navigate('AuthLoading'),
        );
      }}
    />
  </SettingsWrapper>
);

export default Settings;
