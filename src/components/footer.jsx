import { BsBoxArrowUpRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';
const Footer = () => {
    return <footer className="footer-section">
        <div className="sectionOne">
            <h2>AVCADO CREATIVES.</h2>
            <Link to="/contact">WORK WITH US <BsBoxArrowUpRight /></Link>
        </div>
        <div className="sectionTwo">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="sectionThree">
            <p>&copy; 2022 AVCOADO, ALL RIGHTS RESERVED</p>
        </div>
    </footer>
}
export default Footer;