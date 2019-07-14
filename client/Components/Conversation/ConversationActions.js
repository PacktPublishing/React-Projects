import React from "react";
import { Platform, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Mutation } from "react-apollo";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { SEND_MESSAGE } from "../../constants";

const ConversationActions = ({ userName }) => {
  const [message, setMessage] = React.useState("");

  return (
    <ConversationActionsWrapper
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <Mutation mutation={SEND_MESSAGE}>
        {sendMessage => (
          <>
            <TextInput
              width={75}
              marginBottom={0}
              onChangeText={setMessage}
              placeholder="Your message"
              value={message}
            />
            <Button
              width={20}
              padding={10}
              onPress={() => {
                sendMessage({ variables: { to: userName, text: message } });
                setMessage("");
              }}
              title={
                <Ionicons
                  name={`${Platform.OS === "ios" ? "ios" : "md"}-send`}
                  size={42}
                  color="white"
                />
              }
            />
          </>
        )}
      </Mutation>
    </ConversationActionsWrapper>
  );
};

const ConversationActionsWrapper = styled(KeyboardAvoidingView)`
  width: 100%;
  background-color: #ccc;
  padding: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export default ConversationActions;
