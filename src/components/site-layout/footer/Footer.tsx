import Image from 'next/image';
import styles from './Footer.module.scss';

export function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className="container">
                    <div className={styles['top-footer']}>
                        <div className="logo">
                            <Image
                                src='/icons/white_logo.svg'
                                alt='logo'
                                width={429}
                                height={145}
                            />
                        </div>
                        <nav className={styles.menu}>
                        <ul>
                            <li>Language</li>
                            <li>English</li>
                            <li>Franch</li>
                        </ul>
                        <ul>
                            <li>Consult Online</li>
                            <li>All online doctors</li>
                            <li>Ask doctors - Q/A</li>
                        </ul>
                        <ul>
                            <li>Doctors</li>
                            <li>Country</li>
                            <li>Service</li>
                            <li>Disesas</li>
                            <li>Disesas</li>
                        </ul>
                        <ul>
                            <li>Home</li>
                        </ul>
                        </nav>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles['botom-footer']}>
                        <div className="right">All right reserved</div>
                        <div className="policy">Privacy Policy</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
