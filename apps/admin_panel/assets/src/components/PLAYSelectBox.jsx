import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PLAYFieldGroup from './PLAYFieldGroup';

class PLAYSelectBox extends Component {
  constructor(props) {
    super(props);
    const { defaultValue } = props;
    this.state = {
      select: defaultValue,
    };
    this.handleChanged = this.handleChanged.bind(this);
  }

  handleChanged(e) {
    const { value } = e.target;
    const { onOptionChanged } = this.props;
    this.setState(
      {
        select: value,
      },
      () => {
        const { select } = this.state;
        onOptionChanged(select);
      },
    );
  }

  render() {
    const { select } = this.state;
    const { options } = this.props;
    const selectOptions = options.map((v, index) => (
      <option key={index} value={v}>
        {v}
      </option>
    ));

    const { label, id, help } = this.props;
    return (
      <PLAYFieldGroup
        componentClass="select"
        help={help}
        id={id}
        inputClass="play-select-box__input"
        label={label}
        onChange={this.handleChanged}
        selectOptions={selectOptions}
        validationState={null}
        value={select}
      />
    );
  }
}

PLAYSelectBox.propTypes = {
  defaultValue: PropTypes.string,
  help: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  onOptionChanged: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

PLAYSelectBox.defaultProps = {
  id: 'play-select-box',
  options: ['Loading...'],
  defaultValue: 'Loading...',
  help: '',
};

export default PLAYSelectBox;
