# RNnotifications

## Requirements
* Node
* npm
* react native cli
* Android Studio
* Firebase project

## To run the app
* Clone the repo
```
git clone https://github.com/akib22/RNnotifications

cd RNnotifications
```
* Install packages
```
npm i
```
* Run app
```
npm start

npm run android
```

## To get push notifications
* change the Sender ID from RemotePushController.js file to your Firebase project Sender Id.
![Firebase console](assets/images/senderId.jpg "Device registration token")
* Compose a cloud message from your Firebase project.
![Firebase console](assets/images/compose-msg.png "Device registration token")
* Copy FCM registration token from Log.
![Log](assets/images/log.png "Device registration token")
* Add FCM registration token into Firebase project.
![device](assets/images/test-device.png "Device registration token")
