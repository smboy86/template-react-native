import PushNotification from 'react-native-push-notification';

class NotificationHandler {
  // 알람 수신 됬을때
  onNotification(notification) {
    if (typeof this._onNotification === 'function') {
      this._onNotification(notification);
    }
  }

  // 알람 등록시
  onRegister(token) {
    // console.log('토크~~~~~~~~~~~~~~ㄴ   ', token, this._onRegister);
    if (typeof this._onRegister === 'function') {
      this._onRegister(token);
    }
  }

  // 액션 알람 수신시 (기능 확인 못함 X)
  onAction(notification) {
    console.log('Notification action received:');
    console.log('onAction notification.action :: ', notification.action);
    console.log('onAction notification :: ', notification);

    if (notification.action === 'Yes') {
      PushNotification.invokeApp(notification);
    }
  }

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError(err) {
    console.log('onRegistrationError  :: ', err);
  }

  // 1) notifService 호출
  attachRegister(handler) {
    this._onRegister = handler;
  }

  // 2) notifService 호출
  attachNotification(handler) {
    this._onNotification = handler;
  }
}

const handler = new NotificationHandler();

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: handler.onRegister.bind(handler),

  // (required) Called when a remote or local notification is opened or received
  onNotification: handler.onNotification.bind(handler),

  // (optional) Called when Action is pressed (Android)
  onAction: handler.onAction.bind(handler),

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: handler.onRegistrationError.bind(handler),

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   */
  requestPermissions: true,
});

export default handler;
