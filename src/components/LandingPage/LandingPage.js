import React, { Component } from 'react';
import './LandingPage.scss';
import SignInGoogle from '../SignInGoogle';

import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg';
import BackgroundImgs from '../../constants/generalSettings';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBgIndex: 0
    };
  }

  selectBackground = index => this.setState({ currentBgIndex: index });

  render() {
    const { currentBgIndex } = this.state;
    const pageStyle = {
      backgroundImage: `url(${BackgroundImgs[currentBgIndex]})`
    };

    return (
      <div className="landing-page-container" style={pageStyle}>
        {/* Left Sidebar */}
        <div className="landing-page-left-sidebar">
          <div className="landing-page-left-content">
            <CalendarIcon />
            <h3>Monitors the Day to Day activity</h3>
            <p>Lorem ipsum dolor sit amet....</p>
          </div>

          <div className="slider-navigation">
            {BackgroundImgs.map((value, index) => (
              <div
                key={index}
                value={index}
                onClick={e => this.selectBackground(index)}
              />
            ))}
          </div>
        </div>
        {/* Right Sidebar */}
        <div className="landing-page-right-sidebar">
          <h4>Hello there,</h4>
          <h3>Welcome to Monalice Terminal</h3>

          <p>Please Login using your existing Globe google account</p>
          <SignInGoogle />
        </div>
      </div>
    );
  }
}

export default LandingPage;
