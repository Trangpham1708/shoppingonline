import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';

class CategoryDetail extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);
    this.state = {
      txtID: '',
      txtName: ''
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.item !== prevProps.item) {
      this.setState({ txtID: this.props.item._id, txtName: this.props.item.name });
    }
  }

  render() {
    return (
      <div className="float-right">
        <h2 className="text-center">CATEGORY DETAIL</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <table className="category-table">
            <tbody>
              <tr>
                <td>ID</td>
                <td>{this.state.txtID}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>
                  <input
                    type="text"
                    value={this.state.txtName}
                    onChange={(e) => this.setState({ txtName: e.target.value })}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="button-row">
                  <input type="submit" value="ADD NEW" onClick={(e) => this.btnAddClick(e)} />
                  <input type="submit" value="UPDATE" onClick={(e) => this.btnUpdateClick(e)} />
                  <input type="submit" value="DELETE" onClick={(e) => this.btnDeleteClick(e)} />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }

  btnAddClick(e) {
    e.preventDefault();
    const name = this.state.txtName;

    if (name.trim() !== '') {
      const cate = { name: name };
      this.apiPostCategory(cate);
    } else {
      alert('Please input a valid name');
    }
  }

  apiPostCategory(cate) {
    const config = { headers: { 'x-access-token': this.context.token } };

    axios.post('/api/admin/categories', cate, config)
      .then((res) => {
        const result = res.data;
        if (result) {
          alert('OK BABY!');
          this.apiGetCategories();
        } else {
          alert('SORRY BABY!');
        }
      })
      .catch((error) => {
        console.error('Error adding category:', error);
        alert('SORRY BABY! An error occurred while adding the category.');
      });
  }

  apiGetCategories() {
    const config = { headers: { 'x-access-token': this.context.token } };
    
    axios.get('/api/admin/categories', config)
      .then((res) => {
        const result = res.data;
        this.props.updateCategories(result);
      })
      .catch((error) => {
        console.error('Error getting categories:', error);
        alert('SORRY BABY! An error occurred while fetching categories.');
      });
  }

  btnUpdateClick(e) {
    e.preventDefault();
    const id = this.state.txtID;
    const name = this.state.txtName;

    if (id && name.trim() !== '') {
      const cate = { name: name };
      this.apiPutCategory(id, cate);
    } else {
      alert('Please input a valid ID and name');
    }
  }

  apiPutCategory(id, cate) {
    const config = { headers: { 'x-access-token': this.context.token } };

    axios.put(`/api/admin/categories/${id}`, cate, config)
      .then((res) => {
        const result = res.data;
        if (result) {
          alert('OK BABY!');
          this.apiGetCategories();
        } else {
          alert('SORRY BABY!');
        }
      })
      .catch((error) => {
        console.error('Error updating category:', error);
        alert('SORRY BABY! An error occurred while updating the category.');
      });
  }

  btnDeleteClick(e) {
    e.preventDefault();
    const id = this.state.txtID;

    if (window.confirm('ARE YOU SURE?')) {
      if (id) {
        this.apiDeleteCategory(id);
      } else {
        alert('Please input a valid ID');
      }
    }
  }

  apiDeleteCategory(id) {
    const config = { headers: { 'x-access-token': this.context.token } };

    axios.delete(`/api/admin/categories/${id}`, config)
      .then((res) => {
        const result = res.data;
        if (result) {
          alert('OK BABY!');
          this.apiGetCategories();
        } else {
          alert('SORRY BABY!');
        }
      })
      .catch((error) => {
        console.error('Error deleting category:', error);
        alert('SORRY BABY! An error occurred while deleting the category.');
      });
  }
}

export default CategoryDetail;
