import { getAll } from '../../../../tokenplay/services/token_api';
import call from '../../../../actions/api.actions';

const loadTokens = (params, onSuccess) => call({
  params,
  service: getAll,
  callback: {
    onSuccess,
  },
});

export default loadTokens;
