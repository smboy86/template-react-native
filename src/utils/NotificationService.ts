import React, { useEffect } from 'react';
// import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationService from '../routing/NavigationService';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

const Configure = () => {
  // const { activeProject } = useSelector(state => ({
  //   activeProject: state.homeReducer.activeProject,
  // }), shallowEqual);
  // const dispatch = useDispatch();

  // Must be outside of any component LifeCycle (such as `componentDidMount`).
  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log('RNPNonRegistertoken:', token);
      AsyncStorage.setItem('fcmToken', token.token);
    },

    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
      // console.log("NOTIFICATION:", notification, activeProject);

      // process the notification
      // if (notification?.data?.url) {
      //   NavigationService.navigate('PDFScreen', { Key: 'URL', urlForPDF: notification.data.url })
      // } else if (notification.id > 0 && notification.id < 7 && global.notifNavVar) {
      //   global.localPushID = notification.id
      //   NavigationService.navigate('AllTimersButton')
      // } else if (notification.id == 7 && global.notifNavVarP) {
      //   NavigationService.navigate('ProjectDetail')
      // }

      // (required) Called when a remote is received or opened, or local notification is opened
      // notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
    onAction: function (notification) {
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);

      // process the action
    },

    // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    // onRegistrationError: function(err) {
    //  console.error(err.message, err);
    // },

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    largeIcon: 'ic_launcher',
    smallIcon: 'ic_launcher',

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
     * (optional) default: true
     * - Specified if permissions (ios) and token (android and ios) will requested or not,
     * - if not, you must call PushNotificationsHandler.requestPermissions() later
     * - if you are not using remote notification or do not have Firebase installed, use this:
     *     requestPermissions: Platform.OS === 'ios'
     */
  });

  return null;
};

const LocalNotificationSchedule = (id, afterSec, message = '', title = '') => {
  PushNotification.localNotificationSchedule({
    //... You can use all the options from localNotifications
    id: id + '',
    title,
    message, // (required)
    date: new Date(Date.now() + afterSec * 1000), // in n secs
    playSound: true,
    // soundName: 'local_notification_custom_tone.mp3',
    vibrate: true,
    vibration: 180000,
    allowWhileIdle: true,
    visibility: 'public',
    // soundName: 'default',
    showWhen: true,
    usesChronometer: true,
    ignoreInForeground: false,
    priority: 'max',
  });
};

const CancelLocalNotifications = (id) => {
  PushNotification.cancelLocalNotifications({ id: id + '' });
};

const TestNoti = () => {
  PushNotification.localNotification({
    /* Android Only Properties */
    // channelId: soundName ? 'sound-channel-id' : 'default-channel-id',
    channelId: 'default-channel-id',
    ticker: 'My Notification Ticker', // (optional)
    autoCancel: true, // (optional) default: true
    largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
    smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher"
    bigText: 'My big text that will be shown when notification is expanded', // (optional) default: "message" prop
    subText: 'This is a subText', // (optional) default: none
    color: 'red', // (optional) default: system default
    vibrate: true, // (optional) default: true
    vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
    tag: 'some_tag', // (optional) add tag to message
    group: 'group', // (optional) add group to message
    groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
    ongoing: false, // (optional) set whether this is an "ongoing" notification
    actions: ['Yes', 'No'], // (Android only) See the doc for notification actions to know more
    invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true

    when: null, // (optionnal) Add a timestamp pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
    usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
    timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null

    /* iOS only properties */
    category: '', // (optional) default: empty string

    /* iOS and Android properties */
    id: 10, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
    title: 'Local Notification', // (optional)
    message: 'My Notification Message', // (required)
    userInfo: { screen: 'home' }, // (optional) default: {} (using null throws a JSON value '<null>' error)
    // playSound: !!soundName, // (optional) default: true
    // soundName: soundName ? soundName : 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
    number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
  });
};
// const LocalNotification = () => {
//   PushNotification.localNotification({
//     id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
//     autoCancel: true,
//     bigText: 'This is local notification demo in React Native app. Only shown, when expanded.',
//     subText: 'Local Notification Demo',
//     title: 'Local Notification Title',
//     message: 'Expand me to see more',
//     vibrate: true,
//     vibration: 300,
//     playSound: true,
//     soundName:'default',
//     actions: '["Yes", "No"]'
//   })
// }

export {
  Configure,
  LocalNotificationSchedule,
  CancelLocalNotifications,
  TestNoti,
  // LocalNotification
};
