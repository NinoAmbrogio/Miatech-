import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;