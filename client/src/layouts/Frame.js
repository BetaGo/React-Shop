import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppBar from '../components/AppBar';
import BottomNavigation from '../components/BottomNavigation';

import './Frame.css';

function Frame(props) {
  const layout = props.layout;

  return (
    <div>
      <div className="Frame-content-container">
        {props.children}
      </div>
      <AppBar show={true} />
      <BottomNavigation show={true} />
    </div>
  );
}

Frame.defaultProps = {
  children: '',
};

Frame.propTypes = {
  layout: PropTypes.object.isRequired,
  children: PropTypes.node,
};

// export default connect(
//   state => ({
//     layout: state.layout,
//   }),
// )(Frame);

export default Frame;

