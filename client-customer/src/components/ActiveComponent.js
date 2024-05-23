import axios from 'axios';
import React, { Component } from 'react';

class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtID: '',
      txtToken: '',
    };
  }

  render() {
    return (
      <div className="container">
        <div className="left">
          <div className="header">
            <h2>ACTIVE ACCOUNT</h2>
          </div>
          <form>
            <div className="input">
              <input
                type="text"
                placeholder="Enter ID"
                value={this.state.txtID}
                onChange={(e) => this.handleInputChange('txtID', e.target.value)}
                required
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Enter Token"
                value={this.state.txtToken}
                onChange={(e) => this.handleInputChange('txtToken', e.target.value)}
                required
              />
            </div>
             
            <div className="btn">
                <input
                  type="submit"
                  value="ACTIVE"
                  style={{
                    backgroundColor: '#4caf50', // Green background color
                    color: 'white', // White text color
                    padding: '10px 120px', // Padding inside the button
                    border: 'none', // Remove border
                    borderRadius: '100px', // Optional: Add rounded corners
                    cursor: 'pointer', // Add a pointer cursor on hover
                  }}
                onClick={(e) => this.btnActiveClick(e)}
                
              />
            </div>
          </form>
        </div>
        <div className="right">
          <img src="https://img.freepik.com/free-vector/christmas-background-design_1282-50.jpg?size=626&ext=jpg" alt="Avatar" />
        </div>
      </div>
    );
  }

  handleInputChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  btnActiveClick(e) {
    e.preventDefault();
    const { txtID, txtToken } = this.state;

    if (txtID && txtToken) {
      this.apiActive(txtID, txtToken);
    } else {
      alert('Please input ID and Token');
    }
  }

  apiActive(id, token) {
    const body = { id: id, token: token };
    axios.post('/api/customer/active', body).then((res) => {
      const result = res.data;
      if (result) {
        alert('OK BABY!');
      } else {
        alert('SORRY BABY!');
      }
    });
  }
}

export default Active;
