'use client'

import Image from "next/image";
import { Window } from "@/components/ui/window/Window";

import styles from './Account.module.scss'

export function Account() {
    return (
        <Window className={styles.window}>
            <div className={styles.header}>
                <div className={styles.thumbnail}>
                    <span className={styles.letter}>K</span>
                </div>
                <span className={styles.name}>Kateryna Donchenko</span>
            </div>
            <nav className={styles.menu}>
                <ul className={styles.list}>
                    <li>
                        <a href='' className={styles.link}>
                            <Image
                                src='/icons/menu/user.svg'
                                alt="user"
                                width={30}
                                height={30}
                                className="pop-special__img"
                            />
                            <div>My Profile</div>
                        </a>
                    </li>
                    <li className="item">
                        <a href="" className={styles.link}>
                            <Image
                                src='/icons/menu/calendar.svg'
                                alt="calendar"
                                width={30}
                                height={30}
                                className="pop-special__img"
                            />
                            <div>My Appointments</div>
                        </a>
                    </li>
                    <li className="item">
                        <a href="" className={styles.link}>
                            <Image
                                src='/icons/menu/search.svg'
                                alt="search"
                                width={30}
                                height={30}
                                className="pop-special__img"
                            />
                            <div>Search Doctor</div>
                        </a>
                    </li>
                    <li className="item">
                        <a href="" className={styles.link}>
                            <Image
                                src='/icons/menu/security.svg'
                                alt="security"
                                width={30}
                                height={30}
                                className="pop-special__img"
                            />
                            <div>Privancy Policy</div>
                        </a>
                    </li>
                </ul>
                <ul className={styles.list}>
                    <li className="item">
                        <a href="" className={styles.link}>
                            <Image
                                src='/icons/menu/email.svg'
                                alt="email"
                                width={30}
                                height={30}
                                className="pop-special__img"
                            />
                            <div>Contact Us</div>
                        </a>
                    </li>
                </ul>
                <ul className={styles.list}>
                    <li className="item">
                        <a href="" className={styles.link}>
                            <Image
                                src='/icons/menu/log-out.svg'
                                alt="log-out"
                                width={30}
                                height={30}
                                className="pop-special__img"
                            />
                            <div>Log Out</div>
                        </a>
                    </li>
                    <li className="item">
                        <a href="" className={styles.link}>
                            <Image
                                src='/icons/menu/user-delete.svg'
                                alt="log-out"
                                width={30}
                                height={30}
                                className="pop-special__img"
                            />
                            <div>Remove Account</div>
                        </a>
                    </li>
                </ul>
            </nav>
       </Window>
    )
}