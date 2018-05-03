import React from 'react';
import { connect } from 'react-redux';
import PLAYCompleteTable from '../../../../components/PLAYCompleteTable';
import loadAdmins from './actions';
import tables from './tables';
import headerText from './header';

const Admins = props => (
  <PLAYCompleteTable
    headerText={headerText}
    tables={tables}
    visible={{ addBtn: false }}
    {...props}
  />
);

const mapDispatchToProps = dispatch => ({
  loadData: (query, onSuccess) => dispatch(loadAdmins(query, onSuccess)),
});

export default connect(null, mapDispatchToProps)(Admins);
