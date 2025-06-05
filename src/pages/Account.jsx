import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthService from '../services/auth.service';
// UserService might not be needed here anymore if all user calls are in AuthService
// import UserService from '../services/user.service';
import './Account.scss'; // Import the new Account.scss

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => { // Create an async function inside useEffect
      const currentUser = await AuthService.getCurrentUser(); // Await the async call
      console.log('Current User from AuthService:', currentUser);

      if (!currentUser) {
        // If no current user, redirect to register or show message
        navigate('/register'); // Redirect if not logged in
      } else {
        setUser(currentUser); // Set user state with fetched data
        setLoading(false);
      }
    };

    fetchUser(); // Call the async function

  }, [navigate]); // navigate is a dependency

  const handleLogout = async () => {
    await AuthService.logout();
    navigate('/login');
  };

  if (loading) {
    return <div className="account-page">Loading user data...</div>;
  }

  if (!user) {
      // This block is less likely to be reached now due to the redirect,
      // but remains as a fallback or if redirect is removed.
      return (
        <div className="login-page"> {/* Reusing login page layout/styles */}
          <div className="login-container"> {/* Reusing login container styles */}
            <h1 className="login-title">Access Denied</h1>
            <p className="login-subtitle">Please log in to view your account information.</p>
            <div className="login-signup-text">
              <Link to="/login">Go to Login Page</Link>
            </div>
          </div>
        </div>
      );
  }

  return (
    <div className="account-page"> {/* Changed from login-page */}
      <div className="account-container"> {/* Changed from login-container */}
        <h1 className="account-title">Account Information</h1>{/* Changed from login-title */}
        <div className="account-info">
          <p><strong>Username:</strong> {user.userName}</p>
          <p><strong>Full Name:</strong> {user.fullname}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
          {/* Add other user details from the API response as needed */}
          {/* For example, to display the user ID: */}
          {/* <p><strong>User ID:</strong> {user.id}</p> */}
          {/* To display address if not null: */}
          {/* {user.address && <p><strong>Address:</strong> {user.address}</p>} */}
        </div>

        {/* Logout button */}
        <div className="account-actions"> {/* Changed class name */}
          <button className="account-logout-button" onClick={handleLogout}>Logout</button> {/* Changed class name */}
        </div>

      </div>
    </div>
  );
};

export default Account; 