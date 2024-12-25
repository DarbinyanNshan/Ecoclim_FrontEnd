import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const ContactUs = () => {
    const { t } = useTranslation();
    const form = useRef(null);
    const navigate = useNavigate();


    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.contact-border');
            elements.forEach(e => {
                const rect = e.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    e.classList.add('in-view');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_avjh2ws',
            'template_3sxoptj',
            form.current,
            'G_GFIiShl_BuU3IBw')
            .then(() => {
                toast.success(t('messageSent'), {
                    position: "bottom-center",
                    autoClose: 3000,
                    theme: "colored",
                });
            }).catch(() => {
                toast.error(t('messageFailed'), {
                    position: "bottom-center",
                    autoClose: 4000,
                    theme: "colored",
                });
            });
        e.target.reset();
    };


    const onHome = () => {
        navigate('/');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <div className="contact">
                <div className="contact-img">
                    <div className="contact-text">
                        <h1>{t('navBar.contact')}</h1>
                        <h6 onClick={onHome}><span>{t('navBar.home')}</span> / {t('navBar.contact')}</h6>
                    </div>
                </div>
                <div className="contact-me">
                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                        <h2>{t('contact.yourMessegeMe')}</h2>
                        <div className="input-box">
                            <div className="input-field">
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    placeholder={t('contact.name')}
                                    required
                                />
                                <span className="focus"></span>
                            </div>
                            <div className="input-field">
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    placeholder={t('contact.officeMail')}
                                    required
                                />
                                <span className="focus"></span>
                            </div>
                        </div>
                        <div className="textarea-field">
                            <textarea
                                id="message"
                                name="message"
                                cols="30"
                                rows="10"
                                placeholder={t('contact.message')}
                                required
                            />
                            <span className="focus"></span>
                        </div>
                        <div>
                            <button type="submit" className="contact-btn">{t('contact.send')}</button>
                        </div>
                    </form>
                    <div className="contact-info">
                        <div className="contact-border">
                            <div className="contact-content">
                                <div className="contact-icon"><FaLocationDot /></div>
                                <h6 className="contact-title">{t('contact.officeAddress')}</h6>
                            </div>
                            <p className="contact-p">{t('address')}</p>
                        </div>
                        <div className="contact-border">
                            <div className="contact-content">
                                <div className="contact-icon"><FaPhone /></div>
                                <h6 className="contact-title">{t('contact.officePhone')}</h6>
                            </div>
                            <p className="contact-p">{t('phoneNumberOffice')}</p>
                        </div>
                        <div className="contact-border">
                            <div className="contact-content">
                                <div className="contact-icon"><IoMdMail /></div>
                                <h6 className="contact-title">{t('contact.officeMail')}</h6>
                            </div>
                            <p className="contact-p">{t('mail')}</p>
                        </div>
                        <div className="contact-border">
                                <h6 className="contact-title">{t('contact.followMe')}</h6>
                                <div className="website_icon">
            <div className="fa">
              <a
                href="https://www.facebook.com/share/1A3YvLdrsD/?mibextid=wwXIfr"
                aria-label="Facebook"
              >
                <BiLogoFacebook />
              </a>
            </div>
            <div className="in">
              <a href="https://www.instagram.com/ecoclim.am/?igsh=MTZiMThoNGc1b3BoYg%3D%3D#"  aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
            <div className="li">
              <a href="https://www.linkedin.com/company/eco-clim-armenia/"  aria-label="LinkedIn">
                <BiLogoLinkedin />
              </a>
            </div>
          </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
            <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2930.851737551246!2d44.51457287585361!3d40.14246077148512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abbf6d85168d1%3A0x2ea2af8570093468!2s11%20Erebuni%20St%2C%20Yerevan%200041!5e1!3m2!1sru!2sam!4v1732352042399!5m2!1sru!2sam"
                        width="600"
                        height="450"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                </div>
        </>
    );
};
