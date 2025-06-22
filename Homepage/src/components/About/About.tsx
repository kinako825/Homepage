
import styles from '../About/About.module.css';

const About = () => {
    return (
        <div className={styles.profileContent}>
            <div className={styles.contentLeft}>
                <img
                    src="/img/profileimage.jpg"
                    alt="Profile image"
                    className={styles.profileimage}
                />
            </div>

            <div className={styles.profileText}>
                <h1 className={styles.heading}>About</h1>
                <p className={styles.paragraph}>
                    こんにちは。YukiといいますXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br />
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br />
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br />
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br />
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br />
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br />
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br />
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br />
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br />
                    <br />
                </p>
            </div>
        </div>
    );
};

export default About;
