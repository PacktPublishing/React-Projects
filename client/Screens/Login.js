import React from "react";
import { AsyncStorage, Alert, View, TextInput } from "react-native";
import styled from "styled-components/native";
import { Mutation } from "react-apollo";
import Button from "../Components/Button/Button";
import { LOGIN_USER } from "../constants";

const Login = ({ navigation }) => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  // console.log(getToken());

  return (
    <Mutation mutation={LOGIN_USER}>
      {(loginUser, { loading, error }) => (
        <LoginWrapper>
          <StyledTextInput
            onChangeText={text => setUserName(text)}
            value={userName}
            placeholder="Your username"
            textContentType="username"
          />
          <StyledTextInput
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Your password"
            textContentType="password"
          />
          <Button
            title={loading ? "Loading..." : "Login"}
            onPress={() => {
              loginUser({ variables: { userName, password } })
                .then(({ data }) => {
                  const { token } = data.loginUser;

                  AsyncStorage.setItem("token", token).then(value => {
                    navigation.navigate("Main");
                  });
                })
                .catch(error => {
                  if (error) {
                    Alert.alert(
                      "Error",
                      error.graphQLErrors.map(({ message }) => message)[0]
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

const LoginWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const StyledTextInput = styled(TextInput)`
  width: 90%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 15px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  font-size: 20px;
`;

export default Login;
