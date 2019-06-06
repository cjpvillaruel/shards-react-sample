import React from 'react';
import './LandingPage.scss';
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg';

const LandingPage = () => (
  <div className="landing-page-container">
    {/* Left Sidebar */}
    <div className="landing-page-left-sidebar">
      <div className="landing-page-left-content">
        <CalendarIcon />
        <h3>Monitors the Day to Day activity</h3>
        <p>Lorem ipsum dolor sit amet....</p>
      </div>
    </div>
    {/* Right Sidebar */}
    <div className="landing-page-right-sidebar">
      <h4>Hello there,</h4>
      <h3>Welcome to Monalice Terminal</h3>

      <p>Please Login using your existing Globe google account</p>
    </div>
  </div>
);

export default LandingPage;
