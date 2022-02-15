import { Link } from "react-router-dom";
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai'
import { GiAvocado } from 'react-icons/gi';
const Navbar = ({ sidebar, openSidebar, closeSidebar }) => {

    return <nav className={sidebar ? "navbar-section sidebar" : "navbar-section"}>
        <Link to="/Agency.page/">
            <h2><GiAvocado style={{ color: "green" }} /> AVOCADO</h2>
        </Link>
        <AiOutlineBars style={{ display: sidebar ? "none" : null }}
            onClick={openSidebar} className="open-sidebarIcon" size="35px" />
        <AiOutlineClose style={{ display: sidebar ? "block" : null }}
            onClick={closeSidebar} className="close-sidebarIcon" size="35px" />
        <ul className={sidebar ? "sidebarLinks" : "navbar-links"}>
            <li><Link to="/product/1">DESIGN</Link></li>
            <li><Link to="product/2">DEVELOPMENT</Link></li>
            <li><Link to="/product/3">PRODUCTION</Link></li>
            <li><Link to="/product/4">PHOTOGRAPHY</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
        </ul>
    </nav>
}

export default Navbar;