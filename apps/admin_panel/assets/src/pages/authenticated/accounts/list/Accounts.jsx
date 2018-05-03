import React from 'react';
import { connect } from 'react-redux';
import { viewAs, loadAccounts } from './actions';
import PLAYCompleteTable from '../../../../components/PLAYCompleteTable';
import tables from './tables';
import headerText from './header';

const Accounts = props => (
  <PLAYCompleteTable
    createRecordUrl="/accounts/new"
    headerText={headerText}
    tables={tables}
    visible={{ addBtn: false }}
    {...props}
  />
);

function mapDispatchToProps(dispatch) {
  return {
    handleActions: {
      viewAs: accountId => dispatch(viewAs(accountId)),
    },
    loadData: (query, onSuccess) => dispatch(loadAccounts(query, onSuccess)),
  };
}

export default connect(null, mapDispatchToProps)(Accounts);
