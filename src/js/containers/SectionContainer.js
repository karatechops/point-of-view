import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Section from 'grommet/components/Section';

export default class SectionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percent: 0
    };
  }

  componentDidMount() {
    this._setScrollPercent(ReactDOM.findDOMNode(this));
    window.addEventListener('scroll', () => this._handleScroll());
    window.addEventListener('resize', () => this._handleScroll());
  }

  _handleScroll() {
    this._setScrollPercent(ReactDOM.findDOMNode(this));
  }

  _setScrollPercent(node) {
    const nodeBounds = node.getBoundingClientRect();
    const nodeCenter = nodeBounds.top + (nodeBounds.height / 2);
    const center = (1.5 + ((( -1 * nodeCenter) / nodeBounds.height))) / 2;
    const scrollPercentRounded = Math.round(center * 100);

    this.setState({percent: scrollPercentRounded});
  }

  render() {
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        percentScrolled: `${this.state.percent}`
      });
    });

    return (
      <Section {...this.props}
        appCentered={true} justify="center" align="center" full={true}
        pad={{vertical: "large"}}>
        {children}
      </Section>
    );
  }
};
