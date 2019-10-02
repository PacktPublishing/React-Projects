import React from 'react';
import { AsyncStorage, Alert, View } from 'react-native';
import styled from 'styled-components/native';
import { Mutation } from 'react-apollo';
import Button from '../Components/Button/Button';
import TextInput from '../Components/TextInput/TextInput';
import { LOGIN_USER } from '../constants';

const LoginWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Login = ({ navigation }) => {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Mutation mutation={LOGIN_USER}>
      {(loginUser, { loading }) => (
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
          <Button
            title={loading ? 'Loading...' : 'Login'}
            onPress={() => {
              loginUser({ variables: { userName, password } })
                .then(({ data }) => {
                  const { token } = data.loginUser;

                  AsyncStorage.setItem('token', token).then(value => {
                    navigation.navigate('Main');
                  });
                })
                .catch(error => {
                  if (error) {
                    Alert.alert(
                      'Error',
                      error.graphQLErrors.map(({ message }) => message)[0],
                    );
                  }
                });
            }}
          />
        </LoginWrapper>
      )}
    </Mutation>
  );
};

export default Login;
