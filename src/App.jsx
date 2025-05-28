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

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
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
          </Route>
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
