import './ProductDetail.scss';
import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import ProductService from '../services/product.service';

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

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setLoading(true);
        setError(null);

        const detailResponse = await ProductService.getProductById(id);
        console.log("Fetched product detail data:", detailResponse);

        if (detailResponse) {
          setProductDetail(detailResponse);
          fetchRelatedItems(detailResponse);
        } else {
          setError('Product data is empty');
          setProductDetail(null);
        }

      } catch (err) {
        setError(err.message || 'Failed to fetch product detail');
        console.error("Error fetching product detail:", err);
        setProductDetail(null);
        setRelatedProducts([]);
      } finally {
        setLoading(false);
      }
    };

    const fetchRelatedItems = async (currentProduct) => {
      try {
        const relatedItemsResponse = await ProductService.getAllProducts();
        console.log("Fetched all products for related:", relatedItemsResponse);

        const filteredRelated = (relatedItemsResponse || []).filter(item => item.id !== currentProduct.id);
        setRelatedProducts(filteredRelated);

      } catch (err) {
        console.error("Error fetching related items:", err);
        setRelatedProducts([]);
      }
    };

    fetchProductDetail();

  }, [id]);

  if (loading) {
    return <div style={{ padding: 40 }}>Loading product...</div>;
  }

  if (error) {
    return <div style={{ padding: 40, color: 'red' }}>Error loading product: {error}</div>;
  }

  if (!productDetail) {
    return <div style={{ padding: 40 }}>Product not found.</div>;
  }

  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-detail__breadcrumb">
          <Link to="/new-trending">SHOP ALL</Link> / BRACELETS / {productDetail.braceleteName.toUpperCase()}
        </div>
        <div className="product-detail__main">
          <div className="product-detail__gallery">
            <div className="product-detail__image">
              <img src={productDetail.image} alt={productDetail.braceleteName} />
              <button className="product-detail__slider-next"></button>
            </div>
          </div>
          <div className="product-detail__info">
            <h1 className="product-detail__title">{productDetail.braceleteName}</h1>
            <div className="product-detail__price">From <span>{productDetail.price.toLocaleString('vi-VN')}₫</span></div>
            <div className="product-detail__size-row">
              <span>Size</span>
              <div className="product-detail__sizes">
                <button className="active">{productDetail.size}</button>
              </div>
              <a href="#" className="product-detail__find-size">Find your size</a>
            </div>
            <div className="product-detail__qty-row">
              <button>-</button>
              <span>1</span>
              <button>+</button>
              <button className="product-detail__customize-btn">START CUSTOMIZING</button>
            </div>
            <div className="product-detail__desc-block">
              <div className="product-detail__desc-title">Description</div>
              <div className="product-detail__desc-content">
                {productDetail.description}
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
      <div className="related-products-section">
        <h2 className="related-products-title">Related Products</h2>
        <div className="related-products-list-swiper">
          <Swiper
            spaceBetween={24}
            slidesPerView={'auto'}
            style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: 12 }}
          >
            {(relatedProducts || []).map((item) => (
              <SwiperSlide key={item.id} style={{ width: 260 }}>
                <Link 
                  to={`/product/${item.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="related-product-item">
                    <div className="related-product-img-wrap">
                      <img src={item.image} alt={item.braceleteName} />
                      <button className="related-product-add-btn">+</button>
                    </div>
                    <div className="related-product-name">{item.braceleteName}</div>
                    <div className="related-product-price">{item.price.toLocaleString('vi-VN')}₫</div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;