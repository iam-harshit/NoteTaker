// Home.jsx
import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const { isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      // Replace the current history entry with the root path to prevent going back to the login page
      window.history.replaceState(null, '', '/');

      const handlePopState = (event) => {
        // Prevent navigating back by pushing the root path if back button is pressed
        if (window.location.pathname === '/') {
          event.preventDefault();
          navigate('/');
        }
      };

      // Listen for popstate events (i.e., back button navigation)
      window.addEventListener('popstate', handlePopState);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl font-semibold">
          Please log in to view your notes.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* <button
        className="absolute right-4 top-4 bg-blue-400 text-white px-4 py-2"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button> */}
      <div>
        <h1 className="text-3xl font-semibold mb-8">Welcome, {user.name}!</h1>
      </div>
      <div>
        <Link
          to="/create-note"
          className="py-2 px-6 bg-black text-white rounded-3xl font-semibold"
        >
          Create new note
        </Link>
      </div>
    </div>
  );
};

export default Home;
