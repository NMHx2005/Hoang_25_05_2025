import { useState } from 'react';
import './Custom.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const products = [
  { name: 'Custom Chambray', price: '359.000₫' },
  { name: 'Custom Chambray', price: '359.000₫' },
  { name: 'Custom Strand of Pearls', price: '359.000₫' },
  { name: 'Custom Joyful Stone', price: '359.000₫' },
  { name: 'Custom Tiny Words Necklace', price: '359.000₫' },
  { name: 'Custom Sea Salt', price: '359.000₫' },
  { name: 'Custom Amethyst Dreams Crystal', price: '359.000₫' },
  { name: 'Custom Pink Chalk', price: '359.000₫' },
];

const youMayAlsoLikeProducts = [
  { name: 'Love Club Bead Kit', price: '449.000₫', rating: 4, reviews: 16, badge: null },
  { name: 'Merch Lover Gift Set', price: '449.000₫', rating: 5, reviews: 179, badge: 'STACK AND SAVE' },
  { name: 'Hearts by the Pearl Base', price: '449.000₫', rating: 4, reviews: 553, badge: null },
  { name: 'Self-Love Gift Set', price: '449.000₫', rating: 5, reviews: 179, badge: 'STACK AND SAVE' },
  { name: 'Bead Kit- L', price: '449.000₫', rating: 4, reviews: 16, badge: null },
  { name: 'Love Club Bead Kit', price: '449.000₫', rating: 4, reviews: 16, badge: null }, // Adding more for scrolling effect
  { name: 'Merch Lover Gift Set', price: '449.000₫', rating: 5, reviews: 179, badge: 'STACK AND SAVE' },
];

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

  const toggleFilterPopup = () => {
    setIsFilterPopupOpen(!isFilterPopupOpen);
  };

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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className="filter-popup__content">
              <div className="filter-popup__option">
                <span>Sort By</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
              <div className="filter-popup__option">
                <span>Category</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
              <div className="filter-popup__option">
                <span>Color</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
              <div className="filter-popup__option">
                <span>Size</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
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
          <img src="/images/logo.svg" alt="Logo" className="custom__logo" /> {/* Logo */}
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
          <div className="custom__products-grid">
            {products.map((product, index) => (
              <div className="custom__product-card" key={index}>
                <div className="custom__product-image-container">
                  <img src="/images/test__1.png" alt={product.name} className="custom__product-image" />
                  <button className="custom__add-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                  </button>
                </div>
                <div className="custom__product-info">
                  <div className="custom__product-name">{product.name}</div>
                  <div className="custom__product-price">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
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
          <Swiper {...youMayAlsoLikeSwiperSettings}>
            {youMayAlsoLikeProducts.map((product, index) => (
               <SwiperSlide key={index}> {/* Wrap each card in SwiperSlide */}
                 <div className="custom__product-card"> {/* Reuse product card structure */}
                   <div className="custom__product-image-container">
                     <img src="/images/test__1.png" alt={product.name} className="custom__product-image" />
                     {product.badge && <span className="custom__product-badge">{product.badge}</span>} {/* Add badge */}
                     <button className="custom__add-button">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                     </button>
                   </div>
                   <div className="custom__product-info">
                     <div className="custom__product-name">{product.name}</div>
                     <div className="custom__product-price">{product.price}</div>
                     <div className="custom__product-rating">
                       <StarRating rating={product.rating} />
                       <span>{product.reviews} Reviews</span>
                     </div>
                   </div>
                 </div>
               </SwiperSlide>
            ))}
          </Swiper>

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