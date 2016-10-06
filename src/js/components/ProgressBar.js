import React, { PropTypes } from 'react';

const CLASS_ROOT = 'progress';

export default function ProgressBar (props) {
  const progress = (props.progress >= 2)
    ? props.progress
    : 0;

  const progressBar = (<div className={CLASS_ROOT} 
    style={{width: `${progress}%`}} />);

  return (
    <span className={`${CLASS_ROOT}__container`}>
      {progressBar}
    </span>
  );
}

ProgressBar.PropTypes = {
  progress: PropTypes.number
};
