import React, { useEffect } from "react";
import PushNotification from "react-native-push-notification";
import NavigationService from "./NavigationService";

const RemotePushController = () => {
  useEffect(() => {
    PushNotification.configure({
      onRegister: function(token) {
        console.log("TOKEN:", token);
      },
      onNotification: function(notification) {
        console.log("REMOTE NOTIFICATION ==>", notification);
        const clicked = notification.userInteraction;

        if (clicked) {
          const { data } = notification;
          NavigationService.navigate("Notification", { notificationData: data });
        }
      },
      // Change senderId to your project senderId
      senderID: "508837852560",
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);

  return null;
};

export default RemotePushController;
