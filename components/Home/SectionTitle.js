// import React, { Component } from "react";

// export const SectionTitle = props => {
//   return (
//     <div className="sectionTitle">
//       <h1 onClick={props.changeForm}>{props.title}</h1>
//       <p>{props.body}</p>
//       <a href={props.link}>+ Mas Info</a>
//     </div>
//   );
// };


import React, { Component } from "react";
import PropTypes from "prop-types";

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
          { bottomSrc: oldSrc, topSrc: newSrc, bottomOpacity: 1 },
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
    const { duration, timingFunction, delay, style, alt } = this.props;
    const { topSrc, bottomOpacity, bottomSrc, topOpacity } = this.state;

    console.log(topSrc)
    console.log(bottomSrc)

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
            <h1>{topSrc.title}</h1>
            <p>{topSrc.body}</p>
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
              <h1>{bottomSrc.title}</h1>
              <p>{bottomSrc.body}</p>
              <a href={bottomSrc.link}>+ Mas Info</a>
            </div>}
      </div>
    );
  }
}

// const defaultStyle = { width: "100vw", height: "100vh" };

SectionTitle.propTypes = {
  src: PropTypes.string.isRequired,
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