import React from 'react';
import { Platform, View } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const ConversationActionsWrapper = styled(View)`
  width: 100%;
  background-color: #ccc;
  padding: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ConversationActions = ({ userName }) => {
  const [message, setMessage] = React.useState('');

  return (
    <ConversationActionsWrapper>
      <TextInput
        width={75}
        marginBottom={0}
        onChangeText={setMessage}
        placeholder='Your message'
        value={message}
      />
      <Button
        width={20}
        padding={10}
        title={
          <Ionicons
            name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-send`}
            size={42}
            color='white'
          />
        }
      />
    </ConversationActionsWrapper>
  );
};

export default ConversationActions;
