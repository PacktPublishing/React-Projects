import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import styled from "styled-components/native";
import Button from "../Components/Button/Button";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const AddPost = ({ navigation }) => {
  const [imageUrl, setImageUrl] = React.useState(false);

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4]
    });

    if (!result.cancelled) {
      setImageUrl(result.uri);
    }
  };

  const getPermissionAsync = async () => {
    if (Platform.OS === "ios") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert(
          "Sorry, you need camera roll permissions! Go to 'Settings > Expo' to enable these."
        );
      } else {
        pickImageAsync();
      }
    }
  };

  return (
    <AddPostWrapper>
      <AddPostText>Add Post</AddPostText>
      <UploadImage onPress={() => getPermissionAsync()}>
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} style={{ width: '100%', height: '100%' }} />
        ) : (
          <AddPostText>Upload image</AddPostText>
        )}
      </UploadImage>

      <Button onPress={() => navigation.navigate("Main")} title="Cancel" />
    </AddPostWrapper>
  );
};

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

const UploadImage = styled(TouchableOpacity)`
  width: ${Dimensions.get("window").width * 0.98};
  height: ${Dimensions.get("window").width * 0.98};
  margin: ${Dimensions.get("window").width * 0.01}px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default AddPost;
