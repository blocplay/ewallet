import { getAll } from '../../../../tokenplay/services/user_api';
import call from '../../../../actions/api.actions';

const loadUsers = (params, onSuccess) => call({
  params,
  service: getAll,
  callback: {
    onSuccess,
  },
});

export default loadUsers;
