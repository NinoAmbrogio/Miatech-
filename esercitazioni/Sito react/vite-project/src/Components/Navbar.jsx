import NavItem from './NavItem';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div>
        <Link to="/" className="text-xl font-bold text-blue-600 hover:text-blue-800 transition">
          NinoDev
        </Link>
      </div>
      <div>
        <ul className="flex space-x-6">
          <NavItem label="Home" to="/" />
          <NavItem label="About Me" to="/about-me" />
          <NavItem label="Portfolio" to="/portfolio" />
          <NavItem label="Contacts" to="/contacts" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;