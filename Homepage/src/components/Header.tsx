import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <h1>sourstrawberry</h1>
            <nav>
                <ul>
                    <li><Link to="/" className="menuBtn">Home</Link></li>
                    <li><Link to="/about" className="menuBtn">About</Link></li>
                    <li><Link to="/contact" className="menuBtn">Contact</Link></li>
                </ul>
            </nav>
        </header >
    );
};

export default Header;