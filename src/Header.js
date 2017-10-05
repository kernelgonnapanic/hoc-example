import React, { PureComponent } from 'react';

class Header extends PureComponent {
  constructor() {
    super();
    this.calculateOpacity = this.calculateOpacity.bind(this);
  }
  calculateOpacity() {
    if(!this.props.scrollPos) return 0;
    if (this.props.scrollPos > 200) return 1;
    return this.props.scrollPos / 200;
  }
  render() {
    return (
      <div
        className="header"
        style={{opacity: this.calculateOpacity()}}
      >
        List view
      </div>
    )
  }
}

export default Header;