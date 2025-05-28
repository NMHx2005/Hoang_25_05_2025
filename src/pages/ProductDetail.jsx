import './ProductDetail.scss';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Custom Chambray',
    beadStyle: 'Chambray',
    price: '429.000₫',
    descShort: 'Chambray all day',
    desc: 'Just like your favorite chambray shirt that pairs perfectly with everything, this bracelet is just as versatile. Featuring a blend of white, clear, and light blue beads.',
    images: ['/images/charm__large.png', '/images/charm__bow.png', '/images/charm__heart.png', '/images/charm__paw.png'],
    reviewImages: ['/images/review1.png', '/images/review2.png', '/images/reivew3.png'],
    rating: 5,
    reviews: 3957,
    sizes: ['XS', 'S/M', 'M/L', 'L/XL'],
  },
];

const PAIRS_WELL_WITH = [
  {
    name: 'Grace',
    price: '429.000₫',
    image: '/images/charm__large.png',
  },
  {
    name: 'Bow Charm',
    price: '109.000₫',
    image: '/images/charm__large.png',
  },
  {
    name: 'Custom Tiny Words Bracelet',
    price: '429.000₫',
    image: '/images/charm__large.png',
  },
  {
    name: 'You Can',
    price: '399.000₫',
    image: '/images/charm__large.png',
  },
];

const RELATED_PRODUCTS = [
  {
    name: 'Giveback- Rally On!',
    price: '$35',
    image: '/images/charm__large.png',
  },
  {
    name: 'You Are Here- Layer Your Intentions',
    price: '$40',
    image: '/images/charm__large.png',
  },
  {
    name: 'Giveback- Columbine',
    price: '$35',
    image: '/images/charm__large.png',
  },
  {
    name: 'Theta Phi Alpha- Sorority',
    price: '$30',
    image: '/images/charm__large.png',
  },
  {
    name: 'Giveback- Smiles',
    price: '$35',
    image: '/images/charm__large.png',
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find(p => p.id === id) || MOCK_PRODUCTS[0];

  if (!product) return <div style={{ padding: 40 }}>Product not found.</div>;

  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-detail__breadcrumb">SHOP ALL / BRACELETS / {product.name.toUpperCase()}</div>
        <div className="product-detail__main">
          <div className="product-detail__gallery">
            <div className="product-detail__thumbs">
              {product.images.slice(1).map((img, idx) => (
                <img src={img} alt={`thumb${idx + 1}`} key={idx} />
              ))}
            </div>
            <div className="product-detail__image">
              <img src={product.images[0]} alt="main" />
              <button className="product-detail__slider-next"></button>
            </div>
          </div>
          <div className="product-detail__info">
            <div className="product-detail__rating">
              <span className="product-detail__stars">{'★'.repeat(product.rating)}</span>
              <span className="product-detail__reviews">{product.reviews} Reviews</span>
            </div>
            <h1 className="product-detail__title">{product.name}</h1>
            <div className="product-detail__subtitle">Bead Style: {product.beadStyle}</div>
            <div className="product-detail__price">From <span>{product.price}</span></div>
            <div className="product-detail__desc-short">{product.descShort}</div>
            <div className="product-detail__size-row">
              <span>Size</span>
              <div className="product-detail__sizes">
                {product.sizes.map((size, idx) => (
                  <button key={size} className={idx === 0 ? 'active' : ''}>{size}</button>
                ))}
              </div>
              <a href="#" className="product-detail__find-size">Find your size</a>
            </div>
            <div className="product-detail__qty-row">
              <button>-</button>
              <span>1</span>
              <button>+</button>
              <button className="product-detail__customize-btn">START CUSTOMIZING</button>
            </div>
            <div className="product-detail__review-images">
              {product.reviewImages.map((img, idx) => (
                <img src={img} alt={`rv${idx + 1}`} key={idx} />
              ))}
            </div>
            <div className="product-detail__desc-block">
              <div className="product-detail__desc-title">Description</div>
              <div className="product-detail__desc-content">
                {product.desc}
              </div>
            </div>
            <div className="product-detail__expand-block">
              <div className="product-detail__expand-title">Specifications</div>
            </div>
            <div className="product-detail__expand-block">
              <div className="product-detail__expand-title">Size Guide</div>
            </div>
          </div>
        </div>
      </div>
      {/* Pairs Well With Section */}
      <div className="product-detail__pairs-well-with">
        <div className="pairs-well-with__left">
          <div className="pairs-well-with__bg">
            <span>Pairs Well With</span>
          </div>
        </div>
        <div className="pairs-well-with__right">
          {PAIRS_WELL_WITH.map((item, idx) => (
            <div className="pairs-well-with__item" key={idx}>
              <div className="pairs-well-with__img-wrap">
                <img src={item.image} alt={item.name} />
                <button className="pairs-well-with__add-btn">+</button>
              </div>
              <div className="pairs-well-with__name">{item.name}</div>
              <div className="pairs-well-with__price">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Related Products Section */}
      <div className="related-products-section">
        <h2 className="related-products-title">Related Products</h2>
        <div className="related-products-list-swiper">
          <Swiper
            spaceBetween={24}
            slidesPerView={'auto'}
            style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: 12 }}
          >
            {RELATED_PRODUCTS.map((item, idx) => (
              <SwiperSlide key={idx} style={{ width: 260 }}>
                <div className="related-product-item">
                  <div className="related-product-img-wrap">
                    <img src={item.image} alt={item.name} />
                    <button className="related-product-add-btn">+</button>
                  </div>
                  <div className="related-product-name">{item.name}</div>
                  <div className="related-product-price">{item.price}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;