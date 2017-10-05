import React from 'react';

const Header = ({ opacity, blue, green, text }) => (
  <div
    className={`header ${blue && 'headerBlue'} ${green && 'headerGreen'}`}
    style={{ opacity }}
  >
    {text}
  </div>
);

export default Header;