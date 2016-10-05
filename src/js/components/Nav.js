import React, { Component, PropTypes } from 'react';
import Logo from './Logo.js';
import classnames from 'classnames';
import Anchor from 'grommet/components/Anchor';
import Layer from 'grommet/components/Layer';
import Headline from 'grommet/components/Headline';
import Share from 'grommet/components/icons/base/Share';
import SocialShare from 'grommet/components/SocialShare';

import ProgressBar from './ProgressBar';

const CLASS_ROOT = 'section-nav';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layerActive: false
    };

    this._onClick = this._onClick.bind(this);
    this._onLayerClose = this._onLayerClose.bind(this);
  }

  _onClick() {
    if (this.props.progress >= 95) {
      this.setState({layerActive: true});
    }
  }
  
  _onLayerClose() {
    this.setState({layerActive: false});
  }

  render() {
    const classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--active`]: 
          this.props.progress >= 95 || this.props.progress <= 0
      }
    );

    const containerClasses = classnames(
      `${CLASS_ROOT}__container`,
      {
        [`${CLASS_ROOT}__container--started`]: this.props.progress > 2
      }
    );

    const icon = 
      <Share className={`${CLASS_ROOT}__icon`} colorIndex={"dark-2"} />;

    const navCta = (this.props.progress >= 95)
      ? <Anchor label={'Share'} icon={icon} reverse={true} 
          onClick={this._onClick} />
      : undefined;

    const layer = (this.state.layerActive) ? (
      <div className="share-layer">
        <Layer onClose={this._onLayerClose} closer={true} flush={true} 
          align={"center"}>
          <div className="share">
            <Headline size={"large"} strong={true}>
              Thanks for sharing, we're glad you enjoyed it.
            </Headline>
            <div className="share__icons">
              <SocialShare type="email"
              link="http://intelligent-venues.grommet.io/"
              title="Hewlett Packard Enterprise - Intelligent Venues"
              text="HPE is helping stadiums, theme parks and cultural 
                institutions turn visitors into uber fans." />
              <SocialShare type="twitter"
              link="http://intelligent-venues.grommet.io/"
              text="@HPE is helping stadiums, theme parks and cultural 
                institutions turn visitors into uber fans." />
              <SocialShare type="facebook"
              link="http://intelligent-venues.grommet.io/" />
              <SocialShare type="linkedin"
              link="http://intelligent-venues.grommet.io/"
              title="Hewlett Packard Enterprise - Intelligent Venues"
              text="HPE is helping stadiums, theme parks and cultural 
                institutions turn visitors into uber fans." />
            </div>
          </div>
        </Layer>
      </div>
    ) : (null);

    return (
      <nav className={classes}>
      	<div className={containerClasses}>
          <Logo />
          <div className={`${CLASS_ROOT}__control`}>
            {navCta}
          </div>
        </div>
        <ProgressBar progress={this.props.progress}/>
        {layer}
      </nav>
    );
  }
};

Nav.propTypes = {
  progress: PropTypes.number
};
