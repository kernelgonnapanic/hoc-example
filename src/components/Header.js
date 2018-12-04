import React from 'react';

const Header = ({ opacity, blue, green, yellow, text }) => {
  console.log(opacity);
  return (
    <div
      className={`header ${blue && 'headerBlue'} ${green && 'headerGreen'} ${yellow && 'headerYellow'}`}
      style={{ opacity }}
    >
      {text}
    </div>
  );
}


export default Header;