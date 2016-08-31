import React, { Component, PropTypes } from 'react';

const CLASS_ROOT = 'progress';

export default class ProgressBar extends Component {
  render() {
    return (
      <div className={CLASS_ROOT} style={{width: `${this.props.progress}%`}} />
    );
  }
};

ProgressBar.PropTypes = {
  progress: PropTypes.number
};
