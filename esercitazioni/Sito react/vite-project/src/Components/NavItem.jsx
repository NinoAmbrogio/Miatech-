import { Link } from 'react-router-dom'
 
const NavItem = ({ label, to}) => {
    return (
        <li>
            <Link to={to} className="text-gray-700 hover:text-blue-600 font-medium transition">{label}</Link>
        </li>
    )
}
export default NavItem