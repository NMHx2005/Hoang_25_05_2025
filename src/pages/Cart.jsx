import './Cart.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';

const CART_ITEMS = [
  {
    id: 1,
    name: 'Custom Lilac Garden',
    variant: 'Lilac Garden / White / XS',
    price: '439.000đ',
    image: '/images/charm__large.png',
    word: 'YOU GOT THIS',
    quantity: 1,
    note: 'This item takes 5-7 business days to process.'
  },
  {
    id: 2,
    name: 'Custom Lilac Garden',
    variant: 'Lilac Garden / White / XS',
    price: '439.000đ',
    image: '/images/charm__large.png',
    word: 'YOU GOT THIS',
    quantity: 1,
    note: 'This item takes 5-7 business days to process.'
  }
];

const YOU_MAY_ALSO_LIKE = [
  { name: 'Love Club Bead Kit', price: '449.000đ', reviews: 16, image: '/images/charm__large.png', badge: '', rating: 5 },
  { name: 'Merch Lover Gift Set', price: '449.000đ', reviews: 179, image: '/images/charm__large.png', badge: 'STACK AND SAVE', rating: 5 },
  { name: 'Hearts by the Pearl Base', price: '449.000đ', reviews: 553, image: '/images/charm__large.png', badge: '', rating: 5 },
  { name: 'Self-Love Gift Set', price: '449.000đ', reviews: 179, image: '/images/charm__large.png', badge: 'STACK AND SAVE', rating: 5 },
  { name: 'Bead Kit- LWP x Sweethearts', price: '449.000đ', reviews: 16, image: '/images/charm__large.png', badge: '', rating: 5 },
];

const HANDPICKED_CHARMS = [
  { name: 'Coffee Charm', reviews: 965, image: '', rating: 5 },
  { name: 'Magic 8 Ball Charm', reviews: 965, image: '', rating: 5 },
  { name: 'Martini Charm', reviews: 965, image: '', rating: 5 },
];

export default function Cart() {
  const navigate = useNavigate();
  return (
    <div className="cart-page">
      {/* Header */}
      <div className="cart-header">
        <span>Cart (2 Items)</span>
        <button className="cart-header__close">×</button>
      </div>
      {/* Main Content */}
      <div className="cart-content">
        {/* Left: Cart Items & Charms */}
        <div className="cart-left">
          <div className="cart-items-list">
            {CART_ITEMS.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item__img"><img src={item.image} alt={item.name} /></div>
                <div className="cart-item__info">
                  <div className="cart-item__name">{item.name}</div>
                  <div className="cart-item__variant">{item.variant} <span className="cart-item__price">{item.price}</span></div>
                  <div className="cart-item__word"><span>Word: </span>{item.word}</div>
                  <div className="cart-item__qty-row">
                    <button>-</button>
                    <span>{item.quantity}</span>
                    <button>+</button>
                  </div>
                  <div className="cart-item__note">{item.note}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-charms-section">
            <div className="cart-charms-title">Charms Handpicked for You</div>
            <div className="cart-charms-list">
              {HANDPICKED_CHARMS.map((c, idx) => (
                <div className="cart-charm-item" key={idx}>
                  <div className="cart-charm-img"><img src={c.image || '/images/charm__large.png'} alt={c.name} /></div>
                  <div className="cart-charm-rating">{'★'.repeat(c.rating)} <span>({c.reviews})</span></div>
                  <div className="cart-charm-name">{c.name}</div>
                  <button className="cart-charm-add">ADD</button>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-top-picks-section">
            <div className="cart-top-picks-title">Top Picks for Your Cart</div>
            <div className="cart-top-picks-list">
              {/* Có thể thêm sản phẩm gợi ý ở đây */}
            </div>
          </div>
          <div className="cart-summary-block">
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>878.000đ</span>
            </div>
            <div className="cart-summary-row">
              <span>Shipping</span>
              <span>FREE</span>
            </div>
          </div>
        </div>
        {/* Right: You May Also Like */}
        <div className="cart-right">
          <div className="cart-ymal-title">You May Also Like</div>
          <div className="cart-ymal-list">
            <Swiper spaceBetween={24} slidesPerView={'auto'} style={{ maxWidth: '100%', paddingBottom: 12 }}>
              {YOU_MAY_ALSO_LIKE.map((item, idx) => (
                <SwiperSlide key={idx} style={{ width: 260 }}>
                  <div className="cart-ymal-item">
                    {item.badge && <div className="cart-ymal-badge">{item.badge}</div>}
                    <div className="cart-ymal-img" style={{ background: '#e0e0e0', borderRadius: 12, height: 180 }}>
                      <img style={{width: "100%"}} src={item.image || '/images/charm__large.png'} alt={item.name} />
                    </div>
                    <div className="cart-ymal-name">{item.name}</div>
                    <div className="cart-ymal-price">{item.price}</div>
                    <div className="cart-ymal-rating">{'★'.repeat(item.rating)} <span>{item.reviews} Reviews</span></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="cart-footer">
        <button className="cart-checkout-btn" onClick={() => navigate('/pay')}>CHECKOUT • $70</button>
      </div>
    </div>
  );
} 