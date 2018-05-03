import React from 'react';
import { connect } from 'react-redux';
import loadTransactions from './actions';
import tables from './tables';
import headerText from './header';
import PLAYCompleteTable from '../../../../components/PLAYCompleteTable';

const Transactions = props => (
  <PLAYCompleteTable
    createRecordUrl="/transactions/new"
    headerText={headerText}
    tables={tables}
    visible={{ addBtn: false }}
    {...props}
  />
);


const mapDispatchToProps = dispatch => ({
  loadData: (query, onSuccess) => dispatch(loadTransactions(query, onSuccess)),
});

export default connect(null, mapDispatchToProps)(Transactions);
