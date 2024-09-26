'use client'

import Image from "next/image";
import { register } from 'swiper/element/bundle';

import 'swiper/swiper-bundle.css';

register();
export function Main() {
    return (
        <main className="main">
            <div className="main-wrapper">
                <div className="container">
                    <div className="main-content">
                        <div className="promo">
                            <div className="promo__lable">Just Healthy</div>
                            <div className="promo__title">Find the <span>Doctor</span> in the all <span>World</span></div>
                            <div className="promo__subtitle">The large professional Doctor community helps you with all your problems.</div>
                        </div>
                        <Image
                            src='/img/bg-img.jpg'
                            alt="a men with a globe"
                            width={813}
                            height={554}
                            className="promo__img"
                        />
                    </div>
                <div className="pop-special">
                    <div className="pop-special__title">Popular Specialties</div>
                    <div className="pop-special__content">
                        <div className="pop-special__icon">
                            <div className="pop-special__circle">
                            <Image
                                src='/icons/organs/heart.svg'
                                alt="organ"
                                width={50}
                                height={50}
                                className="pop-special__img"
                            />
                            </div>
                        </div>
                        <div className="pop-special__icon">
                            <div className="pop-special__circle">
                                <Image
                                    src='/icons/organs/stomak.svg'
                                    alt="organ"
                                    width={50}
                                    height={50}
                                    className="pop-special__img"
                                />
                            </div>
                        </div>
                        <div className="pop-special__icon">
                            <div className="pop-special__circle">
                                <Image
                                    src='/icons/organs/kidney.svg'
                                    alt="organ"
                                    width={50}
                                    height={50}
                                    className="pop-special__img"
                                />
                            </div>
                        </div>
                        <div className="pop-special__icon">
                            <div className="pop-special__circle">
                                <Image
                                    src='/icons/organs/lungs.svg'
                                    alt="organ"
                                    width={50}
                                    height={50}
                                    className="pop-special__img"
                                />
                            </div>
                        </div>
                        <div className="pop-special__icon">
                            <div className="pop-special__circle">
                                <Image
                                    src='/icons/organs/liver.svg'
                                    alt="organ"
                                    width={50}
                                    height={50}
                                    className="pop-special__img"
                                />
                            </div>
                        </div>
                        <div className="pop-special__icon">
                            <div className="pop-special__circle">
                                <Image
                                    src='/icons/organs/uterus.svg'
                                    alt="organ"
                                    width={50}
                                    height={50}
                                    className="pop-special__img"
                                />
                            </div>
                        </div>
                        <div className="pop-special__icon">
                            <div className="pop-special__circle">
                                <Image
                                    src='/icons/organs/tooth.svg'
                                    alt="organ"
                                    width={50}
                                    height={50}
                                    className="pop-special__img"
                                />
                            </div>
                        </div>
                        <div className="pop-special__icon">
                            <div className="pop-special__circle">
                                <Image
                                    src='/icons/organs/bones.svg'
                                    alt="organ"
                                    width={50}
                                    height={50}
                                    className="pop-special__img"
                                />
                            </div>
                        </div>
                        <div className="pop-special__icon">
                            <div className="pop-special__circle">
                                <Image
                                    src='/icons/organs/neuron.svg'
                                    alt="organ"
                                    width={50}
                                    height={50}
                                    className="pop-special__img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="appointment">
            <div className="container">
                <div className="appointment__title">
                    Select your <span>prefferd method </span>of appointment with the doctor
                    <div className="appointment__title-circle"></div>
                </div>
                <div className="appointment__live">
                    <div className="appointment__text">Live consultation</div>
                </div>
                <div className="appointment__online">
                    <div className="appointment__text">Online consultation</div>
                </div>
            </div>
        </section>
        <section className="doctors">
            <div className="container">
                <div className="doctors__img">
                    <Image
                        src='/img/earth.png'
                        alt="earth"
                        width={984}
                        height={530}
                    />
                </div>
                <div className="doctors__right-wrapper">
                    <div className="doctors__title">You can choose the doctors in the different Countries </div>
                    <div className="doctors__subtitle">All the doctors are verified </div>
                    <swiper-container slides-per-view="3"
                                    allowTouchMove="true"
                                    allowSlideNext="true"
                                    allowSlidePrev="true"
                                    autoplay='true' 
                                    loop="true"
                                    pagination="true" 
                                    css-mode="true">
                        <swiper-slide>
                            <Image 
                                src='/img/doctors/doctor_1.png'
                                alt='doctor'
                                width={199}
                                height={199}
                            />
                        </swiper-slide>
                        <swiper-slide>
                            <Image 
                                src='/img/doctors/doctor_2.png'
                                alt='doctor'
                                width={199}
                                height={199}
                            />
                        </swiper-slide>
                        <swiper-slide>
                            <Image 
                                src='/img/doctors/doctor_3.png'
                                alt='doctor'
                                width={199}
                                height={199}
                            />
                        </swiper-slide>
                        <swiper-slide>
                            <Image 
                                src='/img/doctors/doctor_4.png'
                                alt='doctor'
                                width={199}
                                height={199}
                            />
                        </swiper-slide>
                        <swiper-slide>
                            <Image 
                                src='/img/doctors/doctor_5.png'
                                alt='doctor'
                                width={199}
                                height={199}
                            />
                        </swiper-slide>
                        <swiper-slide>
                            <Image 
                                src='/img/doctors/doctor_6.png'
                                alt='doctor'
                                width={199}
                                height={199}
                            />
                        </swiper-slide>
                    </swiper-container>
                </div>
            </div>
        </section>
    </main>
    )
}