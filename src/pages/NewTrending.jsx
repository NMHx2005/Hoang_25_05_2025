import './NewTrending.scss';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import ProductService from '../services/product.service';
import CharmService from '../services/charm.service';

const NewTrending = () => {
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [errorProducts, setErrorProducts] = useState(null);
  const [youMayAlsoLikeCharms, setYouMayAlsoLikeCharms] = useState([]);
  const [loadingYouMayLike, setLoadingYouMayLike] = useState(true);
  const [errorYouMayLike, setErrorYouMayLike] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoadingProducts(true);
        setErrorProducts(null);
        const response = await ProductService.getAllProducts();
        console.log('API response (main products):', response);
        setProducts(Array.isArray(response) ? response : []);
      } catch (error) {
        console.error('Error fetching products:', error);
        setErrorProducts(error.message || 'Failed to fetch products');
        setProducts([]);
      } finally {
        setLoadingProducts(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchYouMayAlsoLikeCharms = async () => {
      try {
        setLoadingYouMayLike(true);
        setErrorYouMayLike(null);
        const response = await CharmService.getAllCharms();
        console.log("Fetched all charms for You May Also Like:", response.data);
        setYouMayAlsoLikeCharms(response.data || []);
      } catch (error) {
        console.error("Error fetching You May Also Like charms:", error);
        setErrorYouMayLike(error.message || 'Failed to fetch recommended charms');
        setYouMayAlsoLikeCharms([]);
      } finally {
        setLoadingYouMayLike(false);
      }
    };

    fetchYouMayAlsoLikeCharms();
  }, []);

  const StarRating = ({ rating }) => {
    const totalStars = 5;
    return (
      <span style={{ color: '#000', fontSize: '1rem' }}>
        {'★'.repeat(rating)}{'☆'.repeat(totalStars - rating)}
      </span>
    );
  };

  const toggleFilterPopup = () => {
    setIsFilterPopupOpen(!isFilterPopupOpen);
  };

  return (
    <div className="new-trending">
      {isFilterPopupOpen && (
        <div className="filter-popup">
          <div className="filter-popup__overlay" onClick={toggleFilterPopup}></div>
          <div className="filter-popup__sidebar">
            <div className="filter-popup__header">
              <h3 className="filter-popup__title">Filter & Sort</h3>
              <button className="filter-popup__close-button" onClick={toggleFilterPopup}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="filter-popup__content">
              <div className="filter-popup__option">
                <span>Sort By</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <div className="filter-popup__option">
                <span>Category</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <div className="filter-popup__option">
                <span>Color</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <div className="filter-popup__option">
                <span>Size</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
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
              We're always dreaming up new ways to <a href="#">expand your self-love vocabulary</a>. Check out the latest
              wearable affirmations to add the finishing touch to your style and <a href="#">inspire kindness</a> every
              day.
            </span>
          </div>
          <button className="new-trending__filter-btn" onClick={toggleFilterPopup}>
            FILTER & SORT
          </button>
        </div>
        <div className="new-trending__product-grid">
          {loadingProducts ? (
            <div>Loading products...</div>
          ) : errorProducts ? (
            <div style={{ color: 'red' }}>{errorProducts}</div>
          ) : products.length === 0 ? (
            <div>No products available.</div>
          ) : (
            (products || []).map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
                <div className="new-trending__product-item">
                  <div className="new-trending__product-image-container">
                    <img src={product.image} alt={product.braceleteName} className="new-trending__product-image" />
                    <div className="new-trending__add-icon">+</div>
                  </div>
                  <p className="new-trending__product-name">{product.braceleteName}</p>
                  <p className="new-trending__product-price">{product.price.toLocaleString('vi-VN')}₫</p>
                </div>
              </Link>
            ))
          )}
        </div>
        <div className="new-trending__loadmore-block">
          <div className="new-trending__viewed-info">You've Viewed 48 of 55 Products</div>
          <button className="new-trending__loadmore-btn">LOAD MORE</button>
        </div>
        <section className="new-trending__you-may-also-like">
          <h2 className="new-trending__you-may-also-like-title">You May Also Like</h2>
          {loadingYouMayLike ? (
            <div>Loading recommended charms...</div>
          ) : errorYouMayLike ? (
            <div style={{ color: 'red' }}>{errorYouMayLike}</div>
          ) : youMayAlsoLikeCharms.length === 0 ? (
            <div>No recommended charms available.</div>
          ) : (
            <Swiper spaceBetween={20} slidesPerView={'auto'}>
              {youMayAlsoLikeCharms.map((charm) => (
                <SwiperSlide key={charm.id} style={{ width: 280 }}>
                  <Link to={`/charm/${charm.id}`} style={{ textDecoration: 'none' }}>
                    <div className="new-trending__product-item">
                      <div className="new-trending__product-item-image-container">
                        <img src={charm.image} alt={charm.charmName} />
                        <div className="new-trending__product-item__add-icon">+</div>
                      </div>
                      <div className="new-trending__product-item-name">{charm.charmName}</div>
                      <div className="new-trending__product-item-price">{charm.price.toLocaleString('vi-VN')}₫</div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </section>
      </div>
    </div>
  );
};

export default NewTrending;