import React from 'react';
import PropTypes from 'prop-types';

function Header({ text }) {
  return (
    <header>
      <div className="header">
        <h3 className="header-text">{text}</h3>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: 'Feedback UI',
};

Header.propTypes = {
  text: PropTypes.string,
};
export default Header;
