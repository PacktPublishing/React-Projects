import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Button from '../Components/Button/Button';
import TextInput from '../Components/TextInput/TextInput';

const Login = () => {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <LoginWrapper>
      <TextInput
        onChangeText={setUserName}
        value={userName}
        placeholder='Your username'
        textContentType='username'
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder='Your password'
        textContentType='password'
      />
      <Button title={loading ? 'Loading...' : 'Login'} />
    </LoginWrapper>
  );
};

const LoginWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default Login;
