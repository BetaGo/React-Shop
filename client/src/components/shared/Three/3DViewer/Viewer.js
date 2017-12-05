import React, { Component } from 'react';
import createModel from './ViewerThree';

class Viewer extends Component {
  componentDidMount() {
    const { modelConfig } = this.props;
    const model = createModel({ ...modelConfig, element: this.element });
    model.init();
    model.animate();
  }
  render() {
    const { width, height } = this.props;
    const style = {
      width: width || '100%',
      height: height || '100%',
    }

    return (
      <div style={style} ref={e => (this.element = e)} />
    );
  }
}

export default Viewer;
