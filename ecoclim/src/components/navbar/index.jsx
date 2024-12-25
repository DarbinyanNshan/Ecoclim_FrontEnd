import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./style.css";
import logo from "../../assets/images/logo.png";
import { BiMap } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../../i18n/LanguageSwitcher";

import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const { t } = useTranslation();
    const navRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };


        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const onClick = () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="info">
                <div className="contact-data">
                    <a href="mailto:info.ecoclim@gmail.com" className="mail">
                        <span><GoMail /></span> {t("mail")}
                    </a>
                    <a href="tel:+374055145484" className="phone-number">
                        <span><FiPhoneCall /></span>  {t("phoneNumber")}
                    </a>
                    <a href="tel:+374116600062" className="phone-number">
                        <span><FiPhoneCall /></span> {t("phoneNumberOffice")}
                    </a>
                </div>
                <div className="address">
                    <p className="map-text"><span><BiMap /></span> {t('address')}</p>
                </div>
            </div>
            <nav ref={navRef} className={`navbar ${isFixed ? "fixed" : ""}`}>
                <div className="logo" onClick={onClick}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className={`nav-links ${isOpen ? "open" : ""}`}>
                    {isOpen && (
                        <div className="close-icon" onClick={() => setIsOpen(false)}>
                            <IoClose />
                        </div>
                    )}
                    <NavLink to="/" onClick={() => setIsOpen(false)}>{t('navBar.home')}</NavLink>
                    <NavLink to="/about" onClick={() => { setIsOpen(false); scrollToTop(); }}>{t('navBar.about')}</NavLink>
                    <NavLink to="/service" onClick={() => { setIsOpen(false); scrollToTop(); }}>{t('navBar.service')}</NavLink>
                    <NavLink to="/product" onClick={() => { setIsOpen(false); scrollToTop(); }}>{t('navBar.product')}</NavLink>
                    <NavLink to="/contact" onClick={() => { setIsOpen(false); scrollToTop(); }}>{t('navBar.contact')}</NavLink>
                    <LanguageSwitcher setIsOpen={setIsOpen} />
                </div>
                {!isOpen && (
                    <div className="new-toggle" onClick={() => setIsOpen(true)}>
                        <FaBars />
                    </div>
                )}
            </nav>
        </>
    );
};
