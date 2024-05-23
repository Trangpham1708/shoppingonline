import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import { Link } from 'react-router-dom';

class Menu extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);
    this.state = {
      showLogout: false,
    };
  }

  render() {
    return (
      <div className="menu-container">
        <div className="logo-container">
          <Link to='/admin/home'>
            <img src="logo.jpg" alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="float-leftt">
          <Link to='/admin/home'>Home</Link>
            <Link to='/admin/category'>Category</Link>
            <Link to='/admin/product'>Product</Link>
            <Link to='/admin/order'>Order</Link>
            <Link to='/admin/customer'>Customer</Link>
            </div>
        <div className="float-rightt">
          <div className="account-icon-container" onClick={() => this.toggleLogout()}>
            <i className="fas fa-user-circle"></i>
            <span className="logout-text" onClick={() => this.handleLogout()}>Logout</span>
            
          </div>
        </div>
        <div className="float-clear" />
      </div>
    );
  }

  toggleLogout() {
    const accountIconContainer = document.querySelector('.account-icon-container');
    accountIconContainer.classList.toggle('show-logout-text');
  }

  handleLogout() {
    const shouldLogout = window.confirm("Are you sure you want to logout?");
    if (shouldLogout) {
      this.context.setToken('');
      this.context.setUsername('');
      this.setState({
        showLogout: false,
      });
      // Thực hiện các hành động đăng xuất bổ sung nếu cần
    }
  }

  cancelLogout() {
    this.setState({
      showLogout: false,
    });
  }
}

export default Menu;
