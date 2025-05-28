import './NewTrending.scss';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';

const NewTrending = () => {
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);

  const toggleFilterPopup = () => {
    setIsFilterPopupOpen(!isFilterPopupOpen);
  };


  const products = [
    {
      name: 'Beat the Odds- Women\'s History Month',
      price: '329.000₫',
      image: '/images/charm__bow.png',
      isNew: true,
    },
    {
      name: 'Beat the Odds Set- Women\'s History Month',
      price: '329.000₫',
      image: '/images/charm__heart.png',
      isNew: true,
    },
    {
      name: 'Worthy- LWP x Sad Girls Club',
      price: '329.000₫',
      image: '/images/charm__heart.png',
      isNew: false,
    },
    {
      name: 'Worthy- LWP x Sad Girls Club',
      price: '329.000₫',
      image: '/images/charm__bow.png',
      isNew: false,
    },
    {
      name: 'Manifest- The Glow on the go',
      price: '329.000₫',
      image: '/images/charm__bow.png',
      isNew: false,
    },
    {
      name: 'Don\'t Settle- The Glow on the go',
      price: '329.000₫',
      image: '/images/charm__bow.png',
      isNew: false,
    },
    {
      name: 'Courage',
      price: '329.000₫',
      image: '/images/charm__bow.png',
      isNew: false,
    },
    {
      name: 'Confidence- The Glow on the go',
      price: '329.000₫',
      image: '/images/charm__bow.png',
      isNew: false,
    },
    {
      name: 'Cat Mom- Family',
      price: '329.000₫',
      image: '/images/charm__eye.png',
      isNew: false,
    },
    {
      name: 'Strength- Men\'s',
      price: '329.000₫',
      image: '/images/charm__bow.png',
      isNew: false,
    },
    {
      name: 'Menty B- LWP x Sad Girls Club',
      price: '329.000₫',
      image: '/images/charm__heart.png',
      isNew: false,
    },
    {
      name: 'Menty B- LWP x Sad Girls Club',
      price: '329.000₫',
      image: '/images/charm__paw.png',
      isNew: false,
    },
  ];

  const youMayAlsoLikeProducts = [
    { name: 'Love Club Bead Kit', price: '449.000₫', rating: 4, reviews: 16, badge: null },
    { name: 'Merch Lover Gift Set', price: '449.000₫', rating: 5, reviews: 179, badge: 'STACK AND SAVE' },
    { name: 'Hearts by the Pearl Base', price: '449.000₫', rating: 4, reviews: 553, badge: null },
    { name: 'Self-Love Gift Set', price: '449.000₫', rating: 5, reviews: 179, badge: 'STACK AND SAVE' },
    { name: 'Bead Kit- L', price: '449.000₫', rating: 4, reviews: 16, badge: null },
  ];

  const StarRating = ({ rating }) => {
    const totalStars = 5;
    return (
      <span style={{ color: '#000', fontSize: '1rem' }}>
        {'★'.repeat(rating)}{'☆'.repeat(totalStars - rating)}
      </span>
    );
  };

  return (
    <div className="new-trending">
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
      <div className="container">
        <h1 className="new-trending__title">SHOP ALL / NEW & TRENDING</h1>
        <div className="new-trending__desc-row">
          <div className="new-trending__desc-img">
            <img src="/images/charm__eye.png" alt="desc" />
          </div>
          <div className="new-trending__desc-text">
            <span>
              We're always dreaming up new ways to <a href="#">expand your self-love vocabulary</a>. Check out the latest wearable affirmations to add the finishing touch to your style and <a href="#">inspire kindness</a> every day.
            </span>
          </div>
          <button className="new-trending__filter-btn" onClick={toggleFilterPopup}>FILTER & SORT</button>
        </div>
        <div className="new-trending__product-grid">
          {products.map((product, index) => (
            <Link to="/product/1" key={index} style={{ textDecoration: 'none' }}>
              <div className="new-trending__product-item">
                {product.isNew && <span className="new-trending__product-badge">NEW</span>}
                <div className="new-trending__product-image-container">
                  <img src={product.image} alt={product.name} className="new-trending__product-image" />
                  <div className="new-trending__add-icon">+</div>
                </div>
                <p className="new-trending__product-name">{product.name}</p>
                <p className="new-trending__product-price">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="new-trending__loadmore-block">
          <div className="new-trending__viewed-info">You've Viewed 48 of 55 Products</div>
          <button className="new-trending__loadmore-btn">LOAD MORE</button>
        </div>
        <section className="new-trending__you-may-also-like">
          <h2 className="new-trending__you-may-also-like-title">You May Also Like</h2>
          <Swiper spaceBetween={20} slidesPerView={'auto'}>
            {youMayAlsoLikeProducts.map((product, idx) => (
              <SwiperSlide key={idx} style={{ width: 280 }}>
                <div className="new-trending__product-item">
                  {product.badge && <span className="new-trending__product-item-badge">{product.badge}</span>}
                  <div className="new-trending__product-item-image-container">
                    <img src="/images/charm__bow.png" alt={product.name} />
                    <div className="new-trending__product-item__add-icon">+</div>
                  </div>
                  <div className="new-trending__product-item-name">{product.name}</div>
                  <div className="new-trending__product-item-price">{product.price}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', fontSize: '0.9rem' }}>
                    <StarRating rating={product.rating} />
                    <span style={{ color: '#222' }}>{product.reviews} Reviews</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default NewTrending;