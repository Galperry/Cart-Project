import './Header.css';
import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-light bg-light">
              <div className="navbar-brand">
                <i className="fas fa-shopping-cart"></i>
                <span className="badge badge-pill badge-primary mx-4 p-2">
                    {this.props.count}
                </span>
                <span>Items</span>
              </div>
        </nav>
      </div>
    );
  }
}

export default Header;
