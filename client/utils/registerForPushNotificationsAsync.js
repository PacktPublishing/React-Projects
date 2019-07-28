import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

// const PUSH_ENDPOINT = 'https://your-server.com/users/push-token';

async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  if (existingStatus !== "granted") {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  if (finalStatus !== "granted") {
    return;
  }

  const token = await Notifications.getExpoPushTokenAsync();

  console.log(token);

  return token;
}

export default registerForPushNotificationsAsync;
