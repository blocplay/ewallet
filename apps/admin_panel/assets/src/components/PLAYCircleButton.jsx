import React from 'react';
import PropTypes from 'prop-types';
import FA from 'react-fontawesome';

const defaultProps = {
  faName: 'camera',
  className: '',
  onClick: () => {},
  size: 'medium',
  show: true,
};

const propTypes = {
  className: PropTypes.string,
  faName: PropTypes.string,
  onClick: PropTypes.func,
  show: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium']),
};

const PLAYCircleButton = ({
  faName, className, onClick, size, show,
}) => (
  show && (
    <button
      className={`play_circle_button__${size} ${className}`}
      onClick={onClick}
      type="button"
    >
      <FA name={faName} />
    </button>)
);

PLAYCircleButton.propTypes = propTypes;

PLAYCircleButton.defaultProps = defaultProps;

export default PLAYCircleButton;
