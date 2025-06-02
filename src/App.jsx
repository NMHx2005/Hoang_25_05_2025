import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Custom from './pages/Custom';
import Charm from './pages/Charm';
import Login from './pages/Login';
import NewTrending from './pages/NewTrending';
import ProductDetail from './pages/ProductDetail';
import CharmDetail from './pages/CharmDetail';
import Cart from './pages/Cart';
import Pay from './pages/Pay';
import Admin from './pages/admin/Admin';

// Import admin page components
import Dashboard from './pages/admin/Dashboard';
import ManageBracelet from './pages/admin/ManageBracelet';
import CustomerReview from './pages/admin/CustomerReview';
import ProductStock from './pages/admin/ProductStock';
import Settings from './pages/admin/Settings';
import Payment from './pages/admin/Payment';
import Accounts from './pages/admin/Accounts';
import Help from './pages/admin/Help';
import ProductList from './pages/admin/ProductList';
import ProductAdd from './pages/admin/ProductAdd';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={<Admin />} >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product" element={<ProductList />} />
            <Route path="manage-bracelet" element={<ManageBracelet />} />
            <Route path="customer-review" element={<CustomerReview />} />
            <Route path="product-stock" element={<ProductStock />} />
            <Route path="settings" element={<Settings />} />
            <Route path="payment" element={<Payment />} />
            <Route path="accounts" element={<Accounts />} />
            <Route path="help" element={<Help />} />
             {/* Add a default route for /admin */}
            <Route index element={<Dashboard />} /> {/* Redirect or show default admin page */}
            {/* Add route for Add Product page */}
            <Route path="add-product" element={<ProductAdd />} />
          </Route>

          {/* Client Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="custom" element={<Custom />} />
            <Route path="charm" element={<Charm />} />
            <Route path="new-trending" element={<NewTrending />} />
            <Route path="about" element={<div>About Page</div>} />
            <Route path="contact" element={<div>Contact Page</div>} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<div>RegisterPage</div>} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="charm/:id" element={<CharmDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="pay" element={<Pay />} />
          </Route>
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
