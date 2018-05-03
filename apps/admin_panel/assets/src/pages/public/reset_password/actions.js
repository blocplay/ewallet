import { resetPassword } from '../../../tokenplay/services/session_api';
import call from '../../../actions/api.actions';
import SERIALIZER from '../../../helpers/serializer';

class Actions {
  static resetPassword(params, onSuccess) {
    return call({
      params,
      service: resetPassword,
      callback: {
        onSuccess: SERIALIZER.NOTHING(onSuccess),
      },
    });
  }
}

export default Actions;
