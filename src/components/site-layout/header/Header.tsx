'use client'

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.scss';

export function Header () {

    const router = usePathname();

    return (
        <header className={styles.header}>
            <Link href="/">
                <Image
                    src='/icons/logo.svg'
                    alt='logo'
                    width={237}
                    height={65}
                />
            </Link>
            <nav className={styles.menu}>
                <ul className={styles.list}>
                    <li><Link href="/" className={router === '/' ? styles.active : ''}>Home</Link></li>
                    <li><Link href="/doctors" className={`${styles.link} ${router === '/doctors' ? styles.active : ''}`}>Doctors</Link></li>
                    <li><Link href="/consult-online" className={`${styles.link} ${router === '/consult-online' ? styles.active : ''}`}>Consult Online</Link></li>
                </ul>
            </nav>
            <div className={styles['right-block']}>
                <div className={styles.language}>Eng</div>
                <Link href="/account" className={styles.button}>Personal account</Link>
            </div>
        </header>
    )
}