import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../../styles/admin/productAdd.scss';

const ProductAdd = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isMessageOpen, setIsMessageOpen] = useState(true);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleMessage = () => {
    setIsMessageOpen(!isMessageOpen);
  };

  return (
    <div className="product-add-container page-enter-active">
      <h1 className="product-add-header">Thêm sản phẩm mới</h1>
      
      <div className="product-form-grid">
        {/* Left Section: Images and Details */}
        <div>
          <div className="product-image-section">
            {/* Image Placeholders */}
            <div className="image-placeholder">
              <FaPlus className="add-icon" />
            </div>
            <div className="image-placeholder">
              <FaPlus className="add-icon" />
            </div>
            <div className="image-placeholder">
              <FaPlus className="add-icon" />
            </div>
          </div>

          <div className="product-details-section">
            <div className="form-group">
              <label htmlFor="productName">Tên sản phẩm</label>
              <input type="text" id="productName" placeholder="Nhập tên sản phẩm" />
            </div>
            <div className="form-group">
              <label htmlFor="beadStyle">Kiểu hạt</label>
              <input type="text" id="beadStyle" placeholder="Nhập kiểu hạt" />
            </div>
            <div className="form-group">
              <label htmlFor="price">Giá</label>
              <input type="text" id="price" placeholder="Nhập giá" />
            </div>
            <div className="form-group">
              <label htmlFor="descriptionSummary">Mô tả ngắn</label>
              <input type="text" id="descriptionSummary" placeholder="Nhập mô tả ngắn" />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Số lượng</label>
              <input type="number" id="quantity" placeholder="Nhập số lượng" />
            </div>
          </div>
        </div>

        {/* Right Section: Description and Message */}
        <div>
          <button className="add-product-button">ADD PRODUCT</button>

          <div className="collapsible-section">
            <div className="collapsible-header" onClick={toggleDescription}>
              <h3>Description</h3>
              <span className="toggle-icon">
                {isDescriptionOpen ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            {isDescriptionOpen && (
              <div className="collapsible-content">
                <div className="form-group">
                  <textarea placeholder="Nhập mô tả chi tiết"></textarea>
                </div>
              </div>
            )}
          </div>

          <div className="collapsible-section">
            <div className="collapsible-header" onClick={toggleMessage}>
              <h3>Message</h3>
              <span className="toggle-icon">
                {isMessageOpen ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            {isMessageOpen && (
              <div className="collapsible-content">
                 <div className="form-group">
                  <textarea placeholder="Nhập tin nhắn"></textarea>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd; 