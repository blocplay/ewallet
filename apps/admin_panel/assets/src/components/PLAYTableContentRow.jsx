import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PLAYTruncatedCell from './PLAYTruncatedCell';
import DialogActions from '../actions/dialog.actions';
import tableConstants from '../constants/table.constants';
import { formatContent } from '../helpers/tableFormatter';

const PLAYTableContentRow = ({
  loading, data, handleCallback, showDialog, updateDialog,
}) => {
  const tds = Object.keys(data).map((key) => {
    const content = data[key];
    switch (content.type) {
      case tableConstants.PROPERTY: {
        const obj = formatContent(content);
        return (
          <td key={key} className={`${obj.className} play-table-content-row__td`}>
            {content.shortened
              ? <PLAYTruncatedCell
                className={content.className}
                content={obj.content}
              />
              : obj.content
            }
          </td>
        );
      }
      case tableConstants.ACTIONS:
        return (content.value.map(action => (
          <td key={action.title}>
            <Button
              key={action.title}
              bsStyle="link"
              className={`${content.className || 'link-play-blue'}`}
              disabled={action.disabled || loading}
              onClick={() => {
                if (action.shouldConfirm) {
                  updateDialog(
                    action.dialogText,
                    {
                      ok: () => action.click(handleCallback),
                    },
                  );
                  showDialog();
                } else {
                  action.click(handleCallback);
                }
              }}
            >
              {action.title}
            </Button>
          </td>)));
      default: return (<div />);
    }
  });
  return (
    <tr>
      {tds}
    </tr>
  );
};

PLAYTableContentRow.propTypes = {
  data: PropTypes.object.isRequired,
  handleCallback: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  showDialog: PropTypes.func.isRequired,
  updateDialog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { global } = state;
  return {
    loading: global.loading,
  };
};

const mapDispatchToProps = dispatch => ({
  showDialog: () => {
    dispatch(DialogActions.show());
  },
  updateDialog: (text, actions) => {
    dispatch(DialogActions.update(text, actions));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(PLAYTableContentRow);
