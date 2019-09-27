import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Button from '../Components/Button/Button';

const Settings = () => (
  <SettingsWrapper>
    <Button title='Log out' />
  </SettingsWrapper>
);

const SettingsWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default Settings;
