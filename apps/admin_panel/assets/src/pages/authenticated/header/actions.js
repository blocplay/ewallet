import { push } from 'react-router-redux';
import { logout } from '../../../tokenplay/services/session_api';
import SessionActions from '../../../actions/session.actions';
import call from '../../../actions/api.actions';

class Actions {
  static logout() {
    return call({
      service: logout,
      actions: [
        () => SessionActions.clear(),
        () => push('/signin'),
      ],
    });
  }
}

export default Actions;
