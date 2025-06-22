import Header from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <aside className={styles.sidebar}>
                    <Header />
                </aside>
                <main className={styles.mainContent}>
                    {children}
                </main>
            </div>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
