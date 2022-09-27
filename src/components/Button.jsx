import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, isDisabled, type, version }) {
  return (
    <button
      disabled={isDisabled}
      className={`btn btn-${isDisabled ? 'gray' : 'primary'}`}
      type={type}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  isDisabled: PropTypes.bool,
};

export default Button;
