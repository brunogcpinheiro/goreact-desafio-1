import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Header = props => <h2>{props.title}</h2>;

Header.defaultProps = {
  title: 'RocketBook',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
