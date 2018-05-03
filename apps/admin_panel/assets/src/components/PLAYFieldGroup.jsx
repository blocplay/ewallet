import React from 'react';
import PropTypes from 'prop-types';
import FieldGroup from './FieldGroup';

const PLAYFieldGroup = ({
  groupClass, inputClass, labelClass, ...props
}) => (
  <FieldGroup {...props} groupClass={groupClass} inputClass={inputClass} labelClass={labelClass} />
);

PLAYFieldGroup.propTypes = {
  groupClass: PropTypes.string,
  inputClass: PropTypes.string,
  labelClass: PropTypes.string,
};

PLAYFieldGroup.defaultProps = {
  groupClass: 'play-form__group',
  inputClass: 'play-form__input',
  labelClass: 'play-form__label',
};

export default PLAYFieldGroup;
