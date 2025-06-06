import { useState, useEffect } from 'react';
import './Custom.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import CharmService from '../services/charm.service';
import ProductService from '../services/product.service';
import { Link } from 'react-router-dom';

// Helper component for star rating (simple placeholder)
const StarRating = ({ rating }) => {
  const totalStars = 5;
  const stars = [];
  for (let i = 0; i < totalStars; i++) {
    stars.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={i < rating ? "#D99FCA" : "none"}
        stroke={i < rating ? "#D99FCA" : "#D99FCA"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: '15px', height: '15px', marginRight: '2px' }}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    );
  }
  return <div style={{ display: 'flex', alignItems: 'center' }}>{stars}</div>;
};

const Custom = () => {
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
  const [charmProducts, setCharmProducts] = useState([]);
  const [loadingCharms, setLoadingCharms] = useState(true);
  const [errorCharms, setErrorCharms] = useState(null);
  const [youMayAlsoLikeProducts, setYouMayAlsoLikeProducts] = useState([]);
  const [loadingYouMayLike, setLoadingYouMayLike] = useState(true);
  const [errorYouMayLike, setErrorYouMayLike] = useState(null);

  const toggleFilterPopup = () => {
    setIsFilterPopupOpen(!isFilterPopupOpen);
  };

  useEffect(() => {
    const fetchCharmProducts = async () => {
      try {
        setLoadingCharms(true);
        setErrorCharms(null);
        const response = await CharmService.getAllCharms();
        console.log("Fetched all charms:", response.data);
        setCharmProducts(response.data);
      } catch (error) {
        console.error("Error fetching charm products:", error);
        setErrorCharms(error.message || 'Failed to fetch charm products');
        setCharmProducts([]);
      } finally {
        setLoadingCharms(false);
      }
    };

    fetchCharmProducts();
  }, []);

  useEffect(() => {
    const fetchYouMayAlsoLikeProducts = async () => {
      try {
        setLoadingYouMayLike(true);
        setErrorYouMayLike(null);
        const response = await ProductService.getAllProducts();
        console.log("Fetched all products for You May Also Like:", response);
        setYouMayAlsoLikeProducts(response || []);
      } catch (error) {
        console.error("Error fetching You May Also Like products:", error);
        setErrorYouMayLike(error.message || 'Failed to fetch recommended products');
        setYouMayAlsoLikeProducts([]);
      } finally {
        setLoadingYouMayLike(false);
      }
    };

    fetchYouMayAlsoLikeProducts();
  }, []);

  // Swiper settings for You May Also Like section
  const youMayAlsoLikeSwiperSettings = {
    slidesPerView: 'auto', // Allow multiple slides per view
    spaceBetween: 16, // Space between slides (adjust as needed)
    freeMode: true, // Enable free scrolling
    // If you want pagination, add: pagination: { clickable: true },
    // If you want navigation, add: navigation: true, modules: [Navigation],
  };

  return (
    <div className="custom">
      {/* Filter Popup */}
      {isFilterPopupOpen && (
        <div className="filter-popup">
          <div className="filter-popup__overlay" onClick={toggleFilterPopup}></div>
          <div className="filter-popup__sidebar">
            <div className="filter-popup__header">
              <h3 className="filter-popup__title">Filter & Sort</h3>
              <button className="filter-popup__close-button" onClick={toggleFilterPopup}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className="filter-popup__content">
              <div className="filter-popup__option">
                <span>Sort By</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
              <div className="filter-popup__option">
                <span>Category</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
              <div className="filter-popup__option">
                <span>Color</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
              <div className="filter-popup__option">
                <span>Size</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Banner Section */}
      <div className="custom__banner">
        <img src="/images/bg_custom.png" alt="Custom Banner" /> {/* Placeholder image */}
        <div className="custom__banner-overlay">
          <h1>Custom</h1>
          <p>You pick it, we create it.</p>
        </div>
      </div>

      {/* Category/Content Section */}
      <section className="custom__content-section">
        <div className="container">
          <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                      <img src="/images/logo.svg" alt="Logo" className="custom__logo" /> 
            </div>{/* Logo */}
          <h3 className="custom__category">CATEGORY</h3>
          <h2 className="custom__qr-content-title">CUSTOM QR CONTENT</h2>
        </div>
      </section>

      {/* Radio/Image Section */}
      <section className="custom__radio-image-section">
        {/* Removed image placeholder */}
        <button className="custom__radio-button">RADIO</button>
      </section>

      {/* Products Section */}
      <section className="custom__products-section">
        <div className="container">
          <div className="custom__filter-sort">
            <button className="custom__filter-sort-button" onClick={toggleFilterPopup}>FILTER & SORT</button>
          </div>
          
          {loadingCharms ? (
            <div className="custom__loading">Loading charms...</div>
          ) : errorCharms ? (
            <div className="custom__error">{errorCharms}</div>
          ) : (
            <div className="custom__products-grid">
              {charmProducts.length === 0 ? (
                <div className="custom__no-products">No charms available</div>
              ) : (
                charmProducts.map((product) => (
                  <Link 
                    to={`/charm/${product.id}`}
                    key={product.id}
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="custom__product-card">
                      <div className="custom__product-image-container">
                        <img src={product.image} alt={product.charmName} className="custom__product-image" />
                        <button className="custom__add-button">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                        </button>
                      </div>
                      <div className="custom__product-info">
                        <div className="custom__product-name">{product.charmName}</div>
                        <div className="custom__product-price">{product.price.toLocaleString('vi-VN')}₫</div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      </section>

      {/* Load More and You May Also Like Section */}
      <section className="custom__you-may-also-like-section">
        <div className="container">
          <div className="custom__viewed-products-info">
            You've Viewed 48 of 52 Products
          </div>
          <div className="custom__load-more">
            <button className="custom__load-more-button">LOAD MORE</button>
          </div>

          <h2 className="custom__you-may-also-like-title">YOU MAY ALSO LIKE</h2>

          {/* Swiper for You May Also Like */}
          {loadingYouMayLike ? (
            <div>Loading recommended products...</div>
          ) : errorYouMayLike ? (
            <div style={{ color: 'red' }}>{errorYouMayLike}</div>
          ) : youMayAlsoLikeProducts.length === 0 ? (
            <div>No recommended products available.</div>
          ) : (
            <Swiper {...youMayAlsoLikeSwiperSettings}>
              {youMayAlsoLikeProducts.map((product) => (
                <SwiperSlide key={product.id} style={{ width: 260 }}>
                  <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                    <div className="related-product-item">
                      <div className="related-product-img-wrap">
                        <img src={product.image} alt={product.braceleteName} />
                        <button className="related-product-add-btn">+</button>
                      </div>
                      <div className="related-product-name">{product.braceleteName}</div>
                      <div className="related-product-price">{product.price.toLocaleString('vi-VN')}₫</div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Existing basic structure, keep if needed, or remove */}
          {/* <div className="container">
            <h1>Custom Page</h1>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Custom; 