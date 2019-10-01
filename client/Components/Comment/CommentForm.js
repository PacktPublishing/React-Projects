import React from "react";
import { Platform, View } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const CommentForm = () => {
  const [comment, setComment] = React.useState("");

  return (
    <CommentFormWrapper
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <TextInput
        width={75}
        marginBottom={0}
        onChangeText={setComment}
        placeholder="Your comment"
        value={comment}
      />
      <Button
        width={20}
        padding={10}
        title={
          <Ionicons
            name={`${Platform.OS === "ios" ? "ios" : "md"}-send`}
            size={42}
            color="white"
          />
        }
      />
    </CommentFormWrapper>
  );
};

const CommentFormWrapper = styled(View)`
  width: 100%;
  background-color: #ccc;
  padding: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export default CommentForm;
