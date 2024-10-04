import { useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import Image from 'next/image';
import Link from 'next/link';
import { Window } from '@/components/ui/window/Window';

import styles from './Header.module.scss';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(CSSRulePlugin);
export function Header () {
    const container = useRef(null)
    const { contextSafe} = useGSAP({scope: container})

    const router = usePathname();

    const onMouseEnter = contextSafe((className: string, afterElement: string, parameters: {x: number, y: number}) => {
        const afterRule = CSSRulePlugin.getRule(afterElement);

        gsap.to(className, { 
            opacity: 1,
            x: parameters.x, 
            y: parameters.y,
            height: "auto",
            duration: .25,
            onStart: function() {
                const window = document.querySelector(className) as HTMLElement
                if (window) window.style.visibility = 'visible'
            }
        })

            gsap.to(afterRule, {
                duration: .25,
                cssRule: {
                  transform: 'rotate(-90deg)'
                }
            })

    })
    
    const onMouseLeave = contextSafe((className: string, afterElement: string) => {
        const afterRule = CSSRulePlugin.getRule(afterElement)

        gsap.to(className, { 
            opacity: 0, 
            y: 10,
            height: 0,
            onComplete: function() {
                const window = document.querySelector(className) as HTMLElement
                if (window) window.style.visibility = 'hidden'
            } 
        })

        gsap.to(afterRule, {
            cssRule: {
              transform: 'rotate(0deg)'
            }
        });
    })
    return (
        <header className={styles.header} ref={container}>
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
                    <li>
                        <Link href="/" className={router === '/' ? styles.active : ''}>Home</Link>
                    </li>
                    <li className={`${styles.link} ${styles.doctorLink}`} 
                        onMouseEnter={() => onMouseEnter('.doctor-menu', '.Header_doctorLink__DvR3_::after', {x: 0, y: 32})} 
                        onMouseLeave={() => onMouseLeave('.doctor-menu', '.Header_doctorLink__DvR3_::after')}>
                        Doctors
                        <Window className={`${styles.window} doctor-menu`}>
                            <h3 className={styles.windowTitle}>Find doctor by</h3>
                            <div className={styles.windowMenu}>
                                <ul className={styles.windowList}>
                                    <li className={styles.windowHeaderItem}>Country</li>
                                    <li className={styles.windowItem}><a href="">Germany</a></li>
                                    <li className={styles.windowItem}><a href="">Hungary</a></li>
                                    <li className={styles.windowItem}><a href="">Switzerland</a></li>
                                    <li className={styles.windowItem}><a href="">View All</a></li>
                                </ul>
                                <ul className={styles.windowList}>
                                    <li className={styles.windowHeaderItem}>Service</li>
                                    <li className={styles.windowItem}><a href="">Open Heart Surgery</a></li>
                                    <li className={styles.windowItem}><a href="">Braces</a></li>
                                    <li className={styles.windowItem}><a href="">HudraFasial</a></li>
                                    <li className={styles.windowItem}><a href="">View All</a></li>
                                </ul>
                                <ul className={styles.windowList}>
                                    <li className={styles.windowHeaderItem}>Disease</li>
                                    <li className={styles.windowItem}><a href="">Diabetes</a></li>
                                    <li className={styles.windowItem}><a href="">High blood pressure</a></li>
                                    <li className={styles.windowItem}><a href="">Bawassire</a></li>
                                    <li className={styles.windowItem}><a href="">View All </a></li>
                                </ul>
                                <ul className={styles.windowList}>
                                    <li className={styles.windowHeaderItem}>Speciality</li>
                                    <li className={styles.windowItem}><a href="">Dermatologist</a></li>
                                    <li className={styles.windowItem}><a href="">Gynecologist</a></li>
                                    <li className={styles.windowItem}><a href="">Gastroenterologist</a></li>
                                    <li className={styles.windowItem}><a href="">View All </a></li>
                                </ul>
                            </div>
                        </Window>
                    </li>
                    <li className={`${styles.link} ${styles.consultLink}`}
                        onMouseEnter={() => onMouseEnter('.consult', '.Header_consultLink__ZrihE::after', {x: 0, y: 32})} 
                        onMouseLeave={() => onMouseLeave('.consult', '.Header_consultLink__ZrihE::after')}>
                        Consult Online
                        <Window className={`${styles.window} consult`}>
                            <div className={styles.windowMenu}>
                                <ul className={styles.windowList}>
                                    <li className={`${styles.windowHeaderItem} ${styles.windowItemQA}`}>Online Services</li>
                                    <li className={styles.windowItem}><a href="">All Online Doctors </a></li>
                                    <li className={`${styles.windowItem} ${styles.windowItemQA}`}><a href="">Ask Doctor - Q/A</a></li>
                                </ul>
                            </div>
                        </Window>
                    </li>
                </ul>
            </nav>
            <div className={styles['right-block']}>
                <div className={styles.language}
                    onMouseEnter={() => onMouseEnter('.language', '.Header_language__j6TJa::after', {x: -16, y: 47})} 
                    onMouseLeave={() => onMouseLeave('.language', '.Header_language__j6TJa::after')}>
                    Eng
                    <Window className={`${styles.window} language`}>
                            <div className={styles.windowMenu}>
                                <ul className={styles.windowList}>
                                    <li className={styles.windowItem}>
                                        <Image
                                            src={'/icons/flags/united-kingdom.svg'}
                                            alt='english'
                                            height={14}
                                            width={21}
                                        />
                                        <a href="">English </a>
                                    </li>
                                    <li className={`${styles.windowItem} ${styles.windowItemQA}`}>
                                        <Image
                                            src={'/icons/flags/france.svg'}
                                            alt='france'
                                            height={14}
                                            width={21}
                                        />
                                        <a href="">French</a>
                                    </li>
                                </ul>
                            </div>
                        </Window>
                </div>
                <Link href="/login" className={styles.button}>Personal account</Link>
            </div>
        </header>
    )
}