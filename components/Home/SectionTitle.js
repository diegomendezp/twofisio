
import React, { Component } from "react";
import PropTypes from "prop-types";
import FontBold from "../../PagesStyles/FontStyle/FontBold";
import FontRegular from "../../PagesStyles/FontStyle/FontRegular";


class SectionTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topData: props,
      bottomOpacity: 0,
      topOpacity: 1,
      bottomData: props
    };
  }
  componentWillReceiveProps(newProps) {
      
    const oldSrc = this.state.topSrc;
    const newSrc = newProps;

    if (newSrc !== oldSrc) {
      // Reset the component everytime we receive new prop, to
      // cancel out any animation that's still going on
      this.setState({ bottomSrc: false, topSrc: false }, () =>
        this.setState(
          // Opacity less than 1 takes precendence in stacking order
          { bottomSrc: newSrc, topSrc: newSrc, bottomOpacity: 1 },
          () => {
            // One of the few times setTimeout does wonders, this is for
            // getting fade out transition without css keyframe
            if (!this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(
              () => this.setState({ bottomOpacity: 0 }),
              20
            );
          }
        )
      );
    }
  }
  render() {
    const { duration, timingFunction} = this.props;
    const { topSrc, bottomOpacity, bottomSrc, topOpacity } = this.state;
    

    return (
      <div>
        {topSrc &&
            <div className="sectionTitle"
            style={{
                ...{
                  opacity: topOpacity,
                  transition: `opacity ${duration / 1000}s ${timingFunction}`
                }
              }}  
            >
            <FontBold>{topSrc.title}</FontBold>
            <FontRegular>{topSrc.body}</FontRegular>
            <a href={topSrc.link}>+ Mas Info</a>
          </div>
          }
        {bottomSrc &&
              <div className="sectionTitle"
              style={{
                ...{
                  opacity: bottomOpacity,
                  transition: `opacity ${duration / 1000}s ${timingFunction}`
                }
              }}  
              >
              <FontBold>{bottomSrc.title}</FontBold>
              <FontRegular>{bottomSrc.body}</FontRegular>
              <a href={bottomSrc.link}>+ Mas Info</a>
            </div>}
      </div>
    );
  }
}

// const defaultStyle = { width: "100vw", height: "100vh" };

SectionTitle.propTypes = {
  alt: PropTypes.string,
  duration: PropTypes.number,
  timingFunction: PropTypes.string,
  delay: PropTypes.number,
  style: PropTypes.object
};

SectionTitle.defaultProps = {
  duration: 200,
  timingFunction: "ease",
  delay: 0
};


export default SectionTitle;