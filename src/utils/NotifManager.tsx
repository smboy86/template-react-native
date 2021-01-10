import React from 'react';
import {Alert, View} from 'react-native';
import NotifService from './NotifService';
import {RootContext} from '../context/RootContextProvider';

export default class NotifManager extends React.Component {
  static contextType = RootContext;

  constructor(props) {
    super(props);
    this.state = {
      registerToken: '',
      fcmRegistered: false,
    };
    this.notif = new NotifService(this.onRegister.bind(this), this.onNotif.bind(this));
  }

  componentDidMount() {
    const {dispatch} = this.context;

    // Finally notif 객체 등록 (여러 화면에서 사용)
    dispatch({
      type: 'SET_NOTIF',
      payload: {notif: this.notif, token: this.state.registerToken},
    });
  }

  onRegister(token) {
    console.log('Manager onRegister  ::: ', token);
    this.setState({registerToken: token.token, fcmRegistered: true});
  }

  onNotif(notif) {
    console.log('Manager onNotif 받은 알람 :: ', notif);
    Alert.alert(notif.title, notif.message);
  }

  // 알림 권한 확인
  // handlePerm(perms) {
  //   // 호출방법
  //   // this.notif.checkPermission(this.handlePerm.bind(this));
  //   Alert.alert('Permissions', JSON.stringify(perms));
  // }

  render() {
    const {children} = this.props;
    return <View>{children}</View>;
  }
}
