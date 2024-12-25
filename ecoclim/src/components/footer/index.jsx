import React from "react";
import "./style.css";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { RiMapPinLine } from "react-icons/ri";
import { FiPhoneForwarded } from "react-icons/fi";
import { GrMailOption } from "react-icons/gr";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation();

 

    return (
        <>
            <div className="footer">
                <div className="footer_contact">
                    <h2>{t('navBar.contact')}</h2>
                    <div className="footer-content">
                        <p>
                            <span><RiMapPinLine /></span> {t('address')}
                        </p>
                        <p>
                            <span><FiPhoneForwarded /></span> {t('phoneNumber')}
                        </p>
                        <p>
                            <span><GrMailOption /></span>  {t('mail')}
                        </p>
                    </div>
                </div>
                <div className="website">
                    <div className="website_icon">
                        <div className="fa">
                            <a href="https://www.facebook.com/share/1A3YvLdrsD/?mibextid=wwXIfr" aria-label="Facebook">
                                <BiLogoFacebook />
                            </a>
                        </div>
                        <div className="in">
                            <a href="https://www.instagram.com/ecoclim.am?igsh=MTZiMThoNGc1b3BoYg==" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                        </div>
                        <div className="li">
                            <a href="https://www.linkedin.com/company/eco-clim-armenia/" aria-label="LinkedIn">
                                <BiLogoLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_text">
                <p>{t("footer_text")}</p>
            </div>
        </>
    );
};
