import React from 'react';
import { connect } from 'react-redux';
import tables from './tables';
import headerText from './header';
import PLAYCompleteTable from '../../../../components/PLAYCompleteTable';
import loadTokens from './actions';

const Tokens = props => (
  <PLAYCompleteTable
    createRecordUrl="/tokens/new"
    headerText={headerText}
    tables={tables}
    {...props}
  />
);

const mapDispatchToProps = dispatch => ({
  loadData: (query, onSuccess) => dispatch(loadTokens(query, onSuccess)),
});

export default connect(null, mapDispatchToProps)(Tokens);
