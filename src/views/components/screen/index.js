import React from 'react';
import PropTypes from 'prop-types';

const Screen = (props) => {
  const { value, classes } = props;

  return <div className={classes}>{value}</div>;
};
Screen.propTypes = { value: PropTypes.string, classes: PropTypes.string };
export default Screen;
