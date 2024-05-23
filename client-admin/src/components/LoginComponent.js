import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import './styles.css'; // Import the shared styles

class AdminLogin extends Component {
  static contextType = MyContext; // using this.context to access global state

  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: ''
    };
  }


  render() {
    if (this.context.token === '') {
      return (
        <div className="container">
          <div className="left">
            <div className="header">
              <h2>ADMIN LOGIN</h2>
              
            </div>
            <form>
              <div className="input">
                <input
                  type="text"
                  placeholder="Username"
                  value={this.state.txtUsername}
                  onChange={(e) => this.handleInputChange('txtUsername', e.target.value)}
                />
              </div>
              <div className="input">
                <input
                  type="password"
                  placeholder="Password"
                  value={this.state.txtPassword}
                  onChange={(e) => this.handleInputChange('txtPassword', e.target.value)}
                />
              </div>
              <div className="btn">
                <input
                  type="submit"
                  value="LOGIN"
                  style={{
                    backgroundColor: '#4caf50', // Green background color
                    color: 'white', // White text color
                    padding: '10px 68px', // Padding inside the button
                    border: 'none', // Remove border
                    borderRadius: '100px', // Optional: Add rounded corners
                    cursor: 'pointer', // Add a pointer cursor on hover
                  }}
                  onClick={(e) => this.btnLoginClick(e)}
                />
              </div>
            </form>
          </div>
          <div className="right">
            {/* You can replace the following line with your image source */}
            <img src="https://i.pinimg.com/originals/94/a7/dd/94a7dd9142fae216225d288453aee109.gif" alt="Admin Avatar" />
          </div>
        </div>
      );
    }
    return <div />;
  }

  handleInputChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  btnLoginClick(e) {
    e.preventDefault();
    const { txtUsername, txtPassword } = this.state;

    if (txtUsername && txtPassword) {
      const account = { username: txtUsername, password: txtPassword };
      this.apiLogin(account);
    } else {
      alert('Please input username and password');
    }
  }

  apiLogin(account) {
    axios.post('/api/admin/login', account).then((res) => {
      const result = res.data;
      if (result.success === true) {
        this.context.setToken(result.token);
        this.context.setUsername(account.username);
        // Redirect to admin dashboard or perform other actions upon successful login
      } else {
        alert(result.message);
      }
    });
  }
}

export default AdminLogin;
