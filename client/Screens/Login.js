import React from "react";
import { View, TextInput } from "react-native";
import styled from "styled-components/native";
import Button from "../Components/Button/Button";

const Login = ({ navigation }) => {
  const [userName, setUserName] = React.useState("Your username");
  const [password, setPassword] = React.useState("Your password");

  return (
    <LoginWrapper>
      <StyledTextInput
        onChangeText={text => setUserName(text)}
        value={userName}
        textContentType="username"
      />
      <StyledTextInput
        onChangeText={text => setPassword(text)}
        value={password}
        textContentType="password"
      />
      <Button title="Login" />
    </LoginWrapper>
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
