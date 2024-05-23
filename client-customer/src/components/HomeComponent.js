import React, { Component } from 'react';
import Banner from './Banner'; // Import component Banner
import axios from 'axios';
import { Link } from 'react-router-dom';
import gifImage from './images/video.gif';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newprods: [],
      hotprods: []
    };
  }
  render() {
    // Trong hàm render()
    const newprods = this.state.newprods.map((item) => {
      return (
        <div key={item._id} className="inline product-container">
          <figure>
            <Link to={'/product/' + item._id}>
              <img className="product-image" src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" />
            </Link>
            <figcaption className="text-center">
              <div style={{ fontSize: '18px' /* điều chỉnh kích thước font nếu cần */ }}>
                <span>{item.name}</span><br />
                <span>Price: {item.price}$</span>
              </div>
            </figcaption>
          </figure>
        </div>
      );
    });
    
    const hotprods = this.state.hotprods.map((item) => {
      return (
        <div key={item._id} className="inline product-container">
          <figure>
            <Link to={'/product/' + item._id}>
              <img className="product-image" src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" />
            </Link>
            <figcaption className="text-center">
              <div style={{ fontSize: '18px' /* điều chỉnh kích thước font nếu cần */ }}>
                <span>{item.name}</span><br />
                <span>Price: {item.price}$</span>
              </div>
            </figcaption>
          </figure>
        </div>
      );
    });
    return (
      <div>
<div className="main-section align-center">
<div className="product-section"></div>
  <h2 className="text-center"> Merry Christmas</h2>
  <div className="product-section"></div>
        {/* Sử dụng thẻ <img> để hiển thị ảnh GIF */}
        <img src={gifImage} alt="GIF" style={{ width: '100%', height: 'auto' ,border: '2px solid #ddd', borderRadius: '8px',  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}} />
      </div>
      <div className="main-section align-center">
        
  <h2 className="text-center">NEW PRODUCTS</h2>
  <div className="product-section"></div>
          {newprods}
        </div>
        <Banner /> {/* Thêm component Banner vào đây */}
        {this.state.hotprods.length > 0 ?
          <div className="align-center">
            <h2 className="text-center">HOT PRODUCTS</h2>
            <div className="product-section"></div>
            {hotprods}
          </div>
          : <div />}
          <footer>
            <div >
              <p>Nghị Trang An</p> 
              <p style={{ wordWrap: 'break-word', whiteSpace: 'pre-line', width: '450px' }}>
              Chúng tôi tự hào là một website bán nước hoa chính hãng, cam kết mang đến cho bạn những trải nghiệm mùi hương tuyệt vời và đáng nhớ. Chúng tôi không chỉ là một trang web bán nước hoa, mà còn là người bạn đồng hành đáng tin cậy trong việc thể hiện cá tính và phong cách riêng của bạn.
              </p>

            </div>
            <div>
              <br></br>
              <br></br>
              <p>© 2023 ChanChan. All rights reserved.</p>
              <p>Contact us: nghitrangan@chanchan.com</p>
              <p>Address: 12 Tran Hung Dao Street, Ho Chi Minh, Vietnam</p>
            </div>
          </footer>
      </div>
    );
  }
  componentDidMount() {
    this.apiGetNewProducts();
    this.apiGetHotProducts();
  }
  // apis
  apiGetNewProducts() {
    axios.get('/api/customer/products/new').then((res) => {
      const result = res.data;
      this.setState({ newprods: result });
    });
  }
  apiGetHotProducts() {
    axios.get('/api/customer/products/hot').then((res) => {
      const result = res.data;
      this.setState({ hotprods: result });
    });
  }
}
export default Home;