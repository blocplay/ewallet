import { getAll } from '../../../../tokenplay/services/transaction_api';
import call from '../../../../actions/api.actions';

const loadTransactions = (params, onSuccess) => call({
  params,
  service: getAll,
  callback: {
    onSuccess,
  },
});

export default loadTransactions;
