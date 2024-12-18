import React from "react";
import "./style.css";
import service_img from "../../assets/images/service/service.jpg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ServiceContent } from "../../components/allService";

export const Service = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onHome = () => {
        navigate('/');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className="service">
                <div className="service_img">
                    <div className="service_text">
                        <h1>{t('navBar.service')}</h1>
                        <h6 onClick={onHome}><span>{t('navBar.home')}</span> / {t('navBar.service')}</h6>
                    </div>
                </div>
                <div className="service1">
                    <div className="service1_content">
                        <h2 className="service1_title">
                            {t('service.description')}
                        </h2>
                        <p className="service1_text">
                            ✅ {t('service.quality')}<br />
                            ✅ {t('service.precision')}<br />
                            ✅ {t('service.flexibility')}<br />
                            ✅ {t('service.competitivePrices')}<br />
                            ✅ {t('service.support')}<br />
                        </p>
                    </div>
                    <div className="service1_img">
                        <img src={service_img} alt="Service" />
                    </div>
                </div>
            </div>
            <ServiceContent/>
        </>
    );
};
