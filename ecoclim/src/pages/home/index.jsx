import React from "react";
import "./style.css";
import SliderComponent from "../../components/slider/SliderComponent";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


import img1 from "../../assets/images/home/img1.jpg";

import service1 from "../../assets/images/home/service1.jpg";
import service2 from "../../assets/images/home/service2.jpg";
import service3 from "../../assets/images/home/service3.jpg";
import service4 from "../../assets/images/home/service4.jpg";

import icon1 from "../../assets/images/icons/residential.png";
import icon2 from "../../assets/images/icons/restaurant.png";
import icon3 from "../../assets/images/icons/health-clinic.png";
import icon4 from "../../assets/images/icons/skyscrapper.png";
import icon5 from "../../assets/images/icons/storage.png"
import icon6 from "../../assets/images/icons/institution.png"
import PartnersSlider from "../../components/partnersSlider/PartnersSlider";




export const Home = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onAbout = () => {
        navigate('/about');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const onService = () => {
        navigate('/service');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const paragraphs = [
        {
            title: t('home.we_provide'),
            items: [
                t('home.comfort')
            ]
        }
    ];


    const services = [
        {
            img: service1,
            title: t('home.ventilation'),
            description: t('home.ventilation_description')
        },
        {
            img: service2,
            title: t('home.heating_cooling'),
            description: t('home.heating_cooling_description')
        },
        {
            img: service3,
            title: t('home.smoke_extraction'),
            description: t('home.smoke_extraction_description')
        },
        {
            img: service4,
            title: t('home.water_supply_sewerage'),
            description: t('home.water_supply_sewerage_description')
        }
    ];

    const items = [
        { icon: icon1, key: 'home.residentialComplexes' },
        { icon: icon2, key: 'home.hotelRestaurantComplexes' },
        { icon: icon3, key: 'home.medicalCenters' },
        { icon: icon4, key: 'home.businessCenters' },
        { icon: icon5, key: 'home.productionSpaces' },
        { icon: icon6, key: 'home.educationalInstitutions' },
    ];
    return (
        <div>
            <SliderComponent />
            <div className="home1">
                <img className="home1_img" src={img1} alt="" />
                <div className="home1_content">
                    <h2>{t('home.comfort_message')}</h2>
                    <p>{t('home.service_description')}</p>
                    <div className="home_service">
                        {paragraphs.map((section, index) => (
                            <div className="home1_content1" key={index}>
                                <h3>{section.title}</h3>
                                {section.items.map((item, itemIndex) => (
                                    <p key={itemIndex}> {item}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                    <button onClick={onAbout}>{t('home.learnMore')}</button>
                </div>
            </div>
            <div className="home5">
    <div className="home5_content">
        <h2>{t("home.why_choose_us")}</h2>
        <div className="home5_text">
            {[
                "home.engineering_solutions",
                "home.efficiency",
                "home.high_quality_equipment",
                "home.professional_installation",
            ].map((key, index) => (
                <div key={index}>
                    <p>{t(key)}</p>
                </div>
            ))}
        </div>
    </div>
</div>

            <div className="home2_content">
                <h2>{t('home.our')}   {t('navBar.service')}</h2>
                <div className="home2_service">
                    {services.map((service, index) => (
                        <div className="home2_service_item" key={index}>
                            <img src={service.img} alt={`Service ${index + 1}`} />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <button onClick={onService}>{t('home.learnMore')}</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="home3_content">
                <div className="home3_img">
                </div>
                <div className="home3_text">
                    <p>{t('home.trust_me')}</p>
                </div>
            </div>

            <div className="home4_content">
                <h6>{t('home.whoCanApply')}</h6>
                <h2>{t('home.whoCanApplyTo')}</h2>
                <div className="home4_content_text">
                    {items.map((item, index) => (
                        <div className="home4_text" key={index}>
                            <img src={item.icon} alt={index + 1} />
                            <p>{t(item.key)}</p>
                        </div>
                    ))}
                </div>
            </div>
            <PartnersSlider />
        </div>
    );
};