import { Link, useLocation } from 'react-router-dom';
import styles from '../Sidebar/Sidebar.module.css';


const Header = () => {

    const location = useLocation();
    return (
        <header>
            <h1>sourstrawberry</h1>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link
                            to="/"
                            className={`${styles.menuBtn} ${location.pathname === '/' ? styles.active : ''}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link
                            to="/about"
                            className={`${styles.menuBtn} ${location.pathname === '/about' ? styles.active : ''}`}
                        >
                            About
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link
                            to="/contact"
                            className={`${styles.menuBtn} ${location.pathname === '/contact' ? styles.active : ''}`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;