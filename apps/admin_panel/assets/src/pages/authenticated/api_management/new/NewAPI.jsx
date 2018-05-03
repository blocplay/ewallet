import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTranslate } from 'react-localize-redux';
import PropTypes from 'prop-types';
import Actions from './actions';
import AlertActions from '../../../../actions/alert.actions';
import PLAYSelectBox from '../../../../components/PLAYSelectBox';
import PLAYLoadingButton from '../../../../components/PLAYLoadingButton';
import { accountURL } from '../../../../helpers/urlFormatter';

class NewAPI extends Component {
  constructor(props) {
    super(props);
    this.ownerOptions = ['ewallet_api', 'admin_api'];
    this.state = {
      owner: this.ownerOptions[0],
      loading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      owner,
    } = this.state;
    const {
      history, translate, create, showSuccessAlert, session,
    } = this.props;

    create(
      {
        owner,
      },
      (api) => {
        history.push(accountURL(session, '/api_management'));
        showSuccessAlert(translate('api-management.new.notification.create', { api_id: api.id }));
      },
    );
  }

  handleChange(owner) {
    this.setState({
      owner,
    });
  }

  render() {
    const { translate } = this.props;
    const { loading } = this.state;
    return (
      <div className="row">
        <div className="col-xs-6 col-sm-4">
          <div className="play-form">
            <h1>
              {translate('api-management.new.create_an_api')}
            </h1>
            <form autoComplete="off">
              <PLAYSelectBox
                defaultValue={this.ownerOptions[0]}
                label={translate('api-management.new.owner')}
                onOptionChanged={this.handleChange}
                options={this.ownerOptions}
              />
              <PLAYLoadingButton
                loading={loading}
                onClick={this.handleSubmit}
                type="submit"
              >
                {translate('api-management.new.create')}
              </PLAYLoadingButton>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loading } = state.global;
  const translate = getTranslate(state.locale);
  const { session } = state;
  return {
    translate,
    loading,
    session,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    create: (params, onSuccess) => dispatch(Actions.create(params, onSuccess)),
    showSuccessAlert: (message) => {
      dispatch(AlertActions.info(message));
    },
  };
}

NewAPI.propTypes = {
  create: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired,
  showSuccessAlert: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewAPI));
