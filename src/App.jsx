import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

import Layout from './components/layout/Layout';
import Home from './pages/Home';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<div>About Page</div>} />
            <Route path="contact" element={<div>Contact Page</div>} />
            <Route path="login" element={<div>Login Page</div>} />
            <Route path="register" element={<div>Register Page</div>} />
          </Route>
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
