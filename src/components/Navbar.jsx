import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <nav>
      <div className="w-full py-3 border-b">
        <div className="flex justify-between px-20 items-center font-semibold">
          <div>
            <h1 className="text-xl">Notes-Taker</h1>
          </div>
          <div className="flex xl:gap-10 md:gap-8 gap-2">
            <Link to="/">Home</Link>
            <Link to="/create-note">Create Note</Link>
            <Link to="/view-notes">View Notes</Link>
          </div>
          <div>
            {isAuthenticated ? (
              <button
                className="py-2 px-6 bg-black text-white rounded-3xl font-semibold"
                onClick={() =>
                  logout({ returnTo: window.location.origin + '/' })
                }
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="py-2 px-6 bg-black text-white rounded-3xl font-semibold"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
